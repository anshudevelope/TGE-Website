"use client";

import React, { useState, ChangeEvent, FormEvent, DragEvent, useRef } from "react";
import Link from "next/link";

const LOCALITY_SUGGESTIONS = [
    "Civil Lines",
    "Naini",
    "Jhunsi",
    "Phaphamau",
    "Jhalwa",
    "Teliarganj",
    "Lukerganj",
    "Allenganj",
    "Bamrauli",
    "Katra",
    "Tagore Town",
    "Rambagh",
];

interface FileWithPreview {
    file: File;
    previewUrl: string;
}

export default function ListingForm() {
    const [currentStep, setCurrentStep] = useState<number>(1);

    const [formData, setFormData] = useState({
        yourName: "",
        mobileNumber: "",
        email: "",
        userRole: "Owner",
        propertyType: "Residential Plot",
        locality: "",
        areaSize: "",
        areaUnit: "sq ft",
        bedrooms: "2 BHK",
        expectedPrice: "",
        priceNegotiable: false,
        ownershipType: "Freehold",
        additionalDetails: "",
        consent: false,
        website_hp: "", // Honeypot field
    });

    const [files, setFiles] = useState<FileWithPreview[]>([]);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    // Modal state
    const [modalState, setModalState] = useState<{
        isOpen: boolean;
        type: "success" | "error";
        title: string;
        message: string;
    }>({
        isOpen: false,
        type: "success",
        title: "",
        message: "",
    });

    const showBedrooms =
        formData.propertyType === "Flat/Apartment" ||
        formData.propertyType === "Independent House/Villa";

    // --- Input Handlers ---
    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type } = e.target;
        if (type === "checkbox") {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData((prev) => ({ ...prev, [name]: checked }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }

        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const handleLocalityChange = (e: ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setFormData((prev) => ({ ...prev, locality: val }));
        if (val.trim().length > 0) {
            const filtered = LOCALITY_SUGGESTIONS.filter((item) =>
                item.toLowerCase().includes(val.toLowerCase())
            );
            setSuggestions(filtered);
        } else {
            setSuggestions([]);
        }
        if (errors.locality) {
            setErrors((prev) => ({ ...prev, locality: "" }));
        }
    };

    const selectLocality = (item: string) => {
        setFormData((prev) => ({ ...prev, locality: item }));
        setSuggestions([]);
    };

    // --- Drag & Drop Image Handling ---
    const processFiles = (incomingFiles: FileList | File[]) => {
        const validTypes = ["image/jpeg", "image/png", "image/webp"];
        const fileArray = Array.from(incomingFiles);

        const validFiles = fileArray.filter((f) => validTypes.includes(f.type));
        if (validFiles.length < fileArray.length) {
            setErrors((prev) => ({
                ...prev,
                propertyPhotos: "Only JPG, PNG, and WebP images are allowed.",
            }));
        } else {
            setErrors((prev) => ({ ...prev, propertyPhotos: "" }));
        }

        if (files.length + validFiles.length > 5) {
            setErrors((prev) => ({
                ...prev,
                propertyPhotos: "Maximum 5 photos allowed in total.",
            }));
            return;
        }

        const newFilesWithPreview: FileWithPreview[] = validFiles.map((file) => ({
            file,
            previewUrl: URL.createObjectURL(file),
        }));

        setFiles((prev) => [...prev, ...newFilesWithPreview]);
    };

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            processFiles(e.dataTransfer.files);
        }
    };

    const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            processFiles(e.target.files);
        }
    };

    const removeFile = (index: number) => {
        setFiles((prev) => {
            const updated = [...prev];
            URL.revokeObjectURL(updated[index].previewUrl);
            updated.splice(index, 1);
            return updated;
        });
        setErrors((prev) => ({ ...prev, propertyPhotos: "" }));
    };

    // --- Step Validation ---
    const validateStep = (step: number) => {
        const newErrors: Record<string, string> = {};

        if (step === 1) {
            if (!formData.yourName.trim()) newErrors.yourName = "Name is required";
            if (!/^[6-9]\d{9}$/.test(formData.mobileNumber)) {
                newErrors.mobileNumber = "Enter a valid 10-digit Indian mobile number";
            }
        }

        if (step === 2) {
            if (!formData.locality.trim()) newErrors.locality = "Locality is required";
            if (!formData.areaSize || Number(formData.areaSize) <= 0) {
                newErrors.areaSize = "Valid area size is required";
            }
            if (!formData.expectedPrice || Number(formData.expectedPrice) <= 0) {
                newErrors.expectedPrice = "Valid price is required";
            }
        }

        if (step === 3) {
            if (!formData.consent) newErrors.consent = "You must agree to the terms";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNextStep = () => {
        if (validateStep(currentStep)) {
            setCurrentStep((prev) => Math.min(prev + 1, 3));
        }
    };

    const handlePrevStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

    // --- Submit Handler ---
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (formData.website_hp) {
            // Honeypot caught spam submission
            return;
        }

        if (!validateStep(3)) return;

        setLoading(true);

        try {
            let uploadedPhotoUrls: string[] = [];

            if (files.length > 0) {
                const uploadFormData = new FormData();
                files.forEach((item) => uploadFormData.append("files", item.file));

                const uploadRes = await fetch("/api/upload", {
                    method: "POST",
                    body: uploadFormData,
                });

                const uploadData = await uploadRes.json();
                if (!uploadRes.ok)
                    throw new Error(uploadData.error || "Image upload failed");
                uploadedPhotoUrls = uploadData.urls;
            }

            const res = await fetch("/api/property-listing", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    propertyPhotos: uploadedPhotoUrls,
                }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Form submission failed");

            setModalState({
                isOpen: true,
                type: "success",
                title: "Listing Submitted Successfully!",
                message:
                    "Thank you for listing your property with us. Our team will review the details and reach out within 24 hours.",
            });
        } catch (err: any) {
            setModalState({
                isOpen: true,
                type: "error",
                title: "Submission Failed",
                message:
                    err.message || "An unexpected error occurred. Please try again.",
            });
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setFormData({
            yourName: "",
            mobileNumber: "",
            email: "",
            userRole: "Owner",
            propertyType: "Residential Plot",
            locality: "",
            areaSize: "",
            areaUnit: "sq ft",
            bedrooms: "2 BHK",
            expectedPrice: "",
            priceNegotiable: false,
            ownershipType: "Freehold",
            additionalDetails: "",
            consent: false,
            website_hp: "",
        });
        files.forEach((f) => URL.revokeObjectURL(f.previewUrl));
        setFiles([]);
        setCurrentStep(1);
        setModalState({ isOpen: false, type: "success", title: "", message: "" });
    };

    return (
        <section className="py-12 bg-slate-50 flex justify-center px-4 min-h-screen items-center" style={{ backgroundImage: "url('/list-property-bg.png')", backgroundSize: "cover", backgroundPosition: "center",  }}>

            <div className="max-w-[820px] w-full bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 relative">
                {/* Header */}
                <div className="mb-6 text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
                        List Your Property
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                        Complete the 3 quick steps below to publish your property listing.
                    </p>
                </div>

                {/* Step Indicator Bar */}
                <div className="mb-8">
                    <div className="flex items-center justify-between relative">
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0" />
                        <div
                            className="absolute top-1/2 left-0 h-1 bg-amber-500 -translate-y-1/2 z-0 transition-all duration-300"
                            style={{
                                width: `${((currentStep - 1) / 2) * 100}%`,
                            }}
                        />

                        {/* Step 1 Circle */}
                        <div
                            className={`relative z-10 w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${currentStep >= 1
                                ? "bg-amber-500 text-white shadow-md shadow-amber-200"
                                : "bg-slate-200 text-slate-500"
                                }`}
                        >
                            1
                        </div>

                        {/* Step 2 Circle */}
                        <div
                            className={`relative z-10 w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${currentStep >= 2
                                ? "bg-amber-500 text-white shadow-md shadow-amber-200"
                                : "bg-slate-200 text-slate-500"
                                }`}
                        >
                            2
                        </div>

                        {/* Step 3 Circle */}
                        <div
                            className={`relative z-10 w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${currentStep === 3
                                ? "bg-amber-500 text-white shadow-md shadow-amber-200"
                                : "bg-slate-200 text-slate-500"
                                }`}
                        >
                            3
                        </div>
                    </div>
                    <div className="flex justify-between text-[11px] font-semibold text-slate-600 mt-2 px-1">
                        <span className={currentStep >= 1 ? "text-amber-600" : ""}>
                            Personal Info
                        </span>
                        <span className={currentStep >= 2 ? "text-amber-600" : ""}>
                            Property Details
                        </span>
                        <span className={currentStep === 3 ? "text-amber-600" : ""}>
                            Media & Terms
                        </span>
                    </div>
                </div>

                {/* Form Container */}
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    {/* Honeypot field */}
                    <input
                        type="text"
                        name="website_hp"
                        value={formData.website_hp}
                        onChange={handleInputChange}
                        className="hidden"
                        tabIndex={-1}
                        autoComplete="off"
                    />

                    {/* STEP 1: Personal Information */}
                    {currentStep === 1 && (
                        <div className="space-y-4 animate-fadeIn">
                            <h3 className="text-base font-semibold text-slate-800 border-b pb-2">
                                Step 1: Contact Details
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Your Name */}
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                                        Your Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="yourName"
                                        value={formData.yourName}
                                        onChange={handleInputChange}
                                        placeholder="Full Name"
                                        autoComplete="name"
                                        className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                                    />
                                    {errors.yourName && (
                                        <p className="text-xs text-red-500 mt-1">
                                            {errors.yourName}
                                        </p>
                                    )}
                                </div>

                                {/* Mobile Number */}
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                                        Mobile Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="mobileNumber"
                                        value={formData.mobileNumber}
                                        onChange={handleInputChange}
                                        placeholder="10-digit mobile number"
                                        inputMode="numeric"
                                        autoComplete="tel"
                                        className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                                    />
                                    {errors.mobileNumber && (
                                        <p className="text-xs text-red-500 mt-1">
                                            {errors.mobileNumber}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Email */}
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                                        Email (Optional)
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="email@example.com"
                                        autoComplete="email"
                                        className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                                    />
                                </div>

                                {/* Role */}
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                                        I am a <span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex gap-4 items-center h-10">
                                        <label className="flex items-center text-xs text-slate-700 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="userRole"
                                                value="Owner"
                                                checked={formData.userRole === "Owner"}
                                                onChange={handleInputChange}
                                                className="mr-1.5 accent-amber-500"
                                            />
                                            Owner
                                        </label>
                                        <label className="flex items-center text-xs text-slate-700 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="userRole"
                                                value="Authorised Agent"
                                                checked={formData.userRole === "Authorised Agent"}
                                                onChange={handleInputChange}
                                                className="mr-1.5 accent-amber-500"
                                            />
                                            Authorised Agent
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 2: Property Info */}
                    {currentStep === 2 && (
                        <div className="space-y-4 animate-fadeIn">
                            <h3 className="text-base font-semibold text-slate-800 border-b pb-2">
                                Step 2: Property Specifications
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Property Type */}
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                                        Property Type <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="propertyType"
                                        value={formData.propertyType}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                                    >
                                        <option value="Residential Plot">Residential Plot</option>
                                        <option value="Flat/Apartment">Flat/Apartment</option>
                                        <option value="Independent House/Villa">
                                            Independent House/Villa
                                        </option>
                                        <option value="Commercial Shop/Showroom">
                                            Commercial Shop/Showroom
                                        </option>
                                        <option value="Office Space">Office Space</option>
                                        <option value="Agricultural Land">Agricultural Land</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                {/* Locality */}
                                <div className="relative">
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                                        Locality / Area in Prayagraj{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="locality"
                                        value={formData.locality}
                                        onChange={handleLocalityChange}
                                        placeholder="e.g. Civil Lines, Jhalwa"
                                        className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                                    />
                                    {suggestions.length > 0 && (
                                        <ul className="absolute z-20 left-0 right-0 bg-white border rounded-lg mt-1 max-h-40 overflow-y-auto shadow-lg">
                                            {suggestions.map((item, idx) => (
                                                <li
                                                    key={idx}
                                                    onClick={() => selectLocality(item)}
                                                    className="px-3 py-1.5 text-xs text-slate-700 hover:bg-amber-50 cursor-pointer"
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    {errors.locality && (
                                        <p className="text-xs text-red-500 mt-1">
                                            {errors.locality}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Area Size */}
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                                        Area / Size <span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex gap-2">
                                        <input
                                            type="number"
                                            name="areaSize"
                                            value={formData.areaSize}
                                            onChange={handleInputChange}
                                            placeholder="e.g. 1200"
                                            inputMode="numeric"
                                            className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                                        />
                                        <select
                                            name="areaUnit"
                                            value={formData.areaUnit}
                                            onChange={handleInputChange}
                                            className="px-3 py-2 border rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                                        >
                                            <option value="sq ft">sq ft</option>
                                            <option value="sq yd">sq yd</option>
                                            <option value="biswa">biswa</option>
                                            <option value="bigha">bigha</option>
                                        </select>
                                    </div>
                                    {errors.areaSize && (
                                        <p className="text-xs text-red-500 mt-1">
                                            {errors.areaSize}
                                        </p>
                                    )}
                                </div>

                                {/* Bedrooms */}
                                {showBedrooms ? (
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                                            Bedrooms
                                        </label>
                                        <select
                                            name="bedrooms"
                                            value={formData.bedrooms}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                                        >
                                            <option value="1 BHK">1 BHK</option>
                                            <option value="2 BHK">2 BHK</option>
                                            <option value="3 BHK">3 BHK</option>
                                            <option value="4+ BHK">4+ BHK</option>
                                        </select>
                                    </div>
                                ) : (
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                                            Ownership Type
                                        </label>
                                        <select
                                            name="ownershipType"
                                            value={formData.ownershipType}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                                        >
                                            <option value="Freehold">Freehold</option>
                                            <option value="Leasehold">Leasehold</option>
                                            <option value="Power of Attorney">
                                                Power of Attorney
                                            </option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                )}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Expected Price */}
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                                        Expected Price (₹) <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="number"
                                        name="expectedPrice"
                                        value={formData.expectedPrice}
                                        onChange={handleInputChange}
                                        placeholder="e.g. 4500000"
                                        inputMode="numeric"
                                        className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                                    />
                                    {errors.expectedPrice && (
                                        <p className="text-xs text-red-500 mt-1">
                                            {errors.expectedPrice}
                                        </p>
                                    )}
                                </div>

                                {/* Conditional Ownership Type if bedrooms shown */}
                                {showBedrooms && (
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                                            Ownership Type
                                        </label>
                                        <select
                                            name="ownershipType"
                                            value={formData.ownershipType}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                                        >
                                            <option value="Freehold">Freehold</option>
                                            <option value="Leasehold">Leasehold</option>
                                            <option value="Power of Attorney">
                                                Power of Attorney
                                            </option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center gap-2 pt-1">
                                <input
                                    type="checkbox"
                                    id="priceNegotiable"
                                    name="priceNegotiable"
                                    checked={formData.priceNegotiable}
                                    onChange={handleInputChange}
                                    className="w-4 h-4 accent-amber-500 rounded cursor-pointer"
                                />
                                <label
                                    htmlFor="priceNegotiable"
                                    className="text-xs text-slate-700 cursor-pointer"
                                >
                                    Price Negotiable?
                                </label>
                            </div>
                        </div>
                    )}

                    {/* STEP 3: Photos, Extra Details & Confirmation */}
                    {currentStep === 3 && (
                        <div className="space-y-4 animate-fadeIn">
                            <h3 className="text-base font-semibold text-slate-800 border-b pb-2">
                                Step 3: Photos & Submission
                            </h3>

                            {/* Drag and Drop Upload Area */}
                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1">
                                    Upload Photos (Max 5)
                                </label>
                                <div
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                    onClick={() => fileInputRef.current?.click()}
                                    className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors ${isDragging
                                        ? "border-amber-500 bg-amber-50"
                                        : "border-slate-300 hover:border-amber-400 bg-slate-50/50"
                                        }`}
                                >
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept="image/png, image/jpeg, image/webp"
                                        multiple
                                        onChange={handleFileInputChange}
                                        className="hidden"
                                    />
                                    <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-2 text-lg">
                                        📷
                                    </div>
                                    <p className="text-xs font-semibold text-slate-700">
                                        Drag & drop photos here, or{" "}
                                        <span className="text-amber-600 underline">browse</span>
                                    </p>
                                    <p className="text-[10px] text-slate-400 mt-1">
                                        Supports JPG, PNG, WebP (Up to 5 images)
                                    </p>
                                </div>
                                {errors.propertyPhotos && (
                                    <p className="text-xs text-red-500 mt-1">
                                        {errors.propertyPhotos}
                                    </p>
                                )}

                                {/* Previews Grid */}
                                {files.length > 0 && (
                                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mt-3">
                                        {files.map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="relative group rounded-lg overflow-hidden border border-slate-200 aspect-square bg-slate-100"
                                            >
                                                <img
                                                    src={item.previewUrl}
                                                    alt={`Upload preview ${idx + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        removeFile(idx);
                                                    }}
                                                    className="absolute top-1 right-1 bg-red-600 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity shadow"
                                                    title="Remove image"
                                                >
                                                    ✕
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Additional Details */}
                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1">
                                    Additional Details
                                </label>
                                <textarea
                                    name="additionalDetails"
                                    maxLength={150}
                                    rows={2}
                                    value={formData.additionalDetails}
                                    onChange={handleInputChange}
                                    placeholder="Facing, road width, approvals, nearby landmarks, etc."
                                    className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                                />
                                <span className="text-[10px] text-slate-400 text-right block">
                                    {formData.additionalDetails.length}/150
                                </span>
                            </div>

                            {/* Consent Checkbox */}
                            <div>
                                <label className="flex items-start gap-2 text-xs text-slate-600 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="consent"
                                        checked={formData.consent}
                                        onChange={handleInputChange}
                                        className="mt-0.5 accent-amber-500 rounded cursor-pointer"
                                    />
                                    <span>
                                        I agree to be contacted by The Great Empire Group regarding
                                        my listing. Read our{" "}
                                        <Link
                                            href="/privacy-policy"
                                            className="text-amber-600 underline"
                                        >
                                            Privacy Policy
                                        </Link>
                                        .
                                    </span>
                                </label>
                                {errors.consent && (
                                    <p className="text-xs text-red-500 mt-1">{errors.consent}</p>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Navigation & Submit Controls */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        {currentStep > 1 ? (
                            <button
                                type="button"
                                onClick={handlePrevStep}
                                className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-100 transition-colors"
                            >
                                ← Back
                            </button>
                        ) : (
                            <div />
                        )}

                        {currentStep < 3 ? (
                            <button
                                type="button"
                                onClick={handleNextStep}
                                className="px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold transition-colors shadow-md ml-auto"
                            >
                                Next Step →
                            </button>
                        ) : (
                            <button
                                type="submit"
                                disabled={loading}
                                className="px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold transition-colors shadow-md disabled:opacity-50 ml-auto flex items-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <svg
                                            className="animate-spin h-4 w-4 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v8H4z"
                                            />
                                        </svg>
                                        Submitting...
                                    </>
                                ) : (
                                    "Submit My Property"
                                )}
                            </button>
                        )}
                    </div>
                </form>
            </div>

            {/* Confirmation Modal (Success / Error) */}
            {modalState.isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fadeIn">
                    <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-xl border border-slate-100 text-center relative">
                        <div
                            className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold ${modalState.type === "success"
                                ? "bg-emerald-100 text-emerald-600"
                                : "bg-red-100 text-red-600"
                                }`}
                        >
                            {modalState.type === "success" ? "✓" : "✕"}
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                            {modalState.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 mb-6">
                            {modalState.message}
                        </p>

                        <button
                            type="button"
                            onClick={() => {
                                if (modalState.type === "success") {
                                    resetForm();
                                } else {
                                    setModalState((prev) => ({ ...prev, isOpen: false }));
                                }
                            }}
                            className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white transition-colors shadow-md ${modalState.type === "success"
                                ? "bg-emerald-600 hover:bg-emerald-700"
                                : "bg-slate-800 hover:bg-slate-900"
                                }`}
                        >
                            {modalState.type === "success" ? "Close & Reset" : "Try Again"}
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}