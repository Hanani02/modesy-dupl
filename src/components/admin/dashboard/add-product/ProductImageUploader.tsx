"use client";

import React, { useRef, useState } from "react";
import { UploadCloud, AlertCircle, X, Check } from "lucide-react";

export interface UploadedImage {
  id: string;
  url: string;
  isMain: boolean;
  name: string;
}

interface ProductImageUploaderProps {
  images: UploadedImage[];
  onImagesChange: (images: UploadedImage[]) => void;
}

export default function ProductImageUploader({
  images,
  onImagesChange,
}: ProductImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [imageUrlInput, setImageUrlInput] = useState("");
  const [showUrlInput, setShowUrlInput] = useState(false);

  const samplePresets = [
    { label: "Midi Skirt", url: "/images/products/midi-skirt.webp" },
    { label: "Scarves", url: "/images/products/scarves.webp" },
    { label: "Summer Top", url: "/images/products/summer-top-lace.webp" },
    { label: "Lace Blouse", url: "/images/products/women-lace-blouse.webp" },
  ];

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) return;

    const promises = Array.from(fileList).map((file, idx) => {
      return new Promise<UploadedImage>((resolve) => {
        const reader = new FileReader();
        reader.onload = () => {
          resolve({
            id: `${Date.now()}-${idx}-${Math.random().toString(36).substring(2, 6)}`,
            url: reader.result as string,
            isMain: images.length === 0 && idx === 0,
            name: file.name,
          });
        };
        reader.onerror = () => {
          resolve({
            id: `${Date.now()}-${idx}`,
            url: URL.createObjectURL(file),
            isMain: images.length === 0 && idx === 0,
            name: file.name,
          });
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(promises).then((newImages) => {
      onImagesChange([...images, ...newImages]);
    });
  };

  const handleAddImageUrl = (urlToAdd?: string) => {
    const targetUrl = (urlToAdd || imageUrlInput).trim();
    if (!targetUrl) return;

    onImagesChange([
      ...images,
      {
        id: `${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        url: targetUrl,
        isMain: images.length === 0,
        name: "Image",
      },
    ]);
    if (!urlToAdd) setImageUrlInput("");
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const setMainImage = (id: string) => {
    onImagesChange(
      images.map((img) => ({
        ...img,
        isMain: img.id === id,
      }))
    );
  };

  const removeImage = (id: string) => {
    const filtered = images.filter((img) => img.id !== id);
    if (filtered.length > 0 && !filtered.some((img) => img.isMain)) {
      filtered[0].isMain = true;
    }
    onImagesChange(filtered);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="block text-[15px] font-semibold text-[#333]">
          Images <span className="text-xs font-normal text-gray-500">({images.length} added)</span>
        </label>
        <button
          type="button"
          onClick={() => setShowUrlInput(!showUrlInput)}
          className="text-xs text-[#00a99d] hover:underline font-semibold cursor-pointer"
        >
          {showUrlInput ? "Hide URL input" : "+ Add image by URL / Presets"}
        </button>
      </div>

      {showUrlInput && (
        <div className="p-3 bg-gray-50 border border-gray-200 rounded space-y-2">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Paste image URL (https://... or /images/...)"
              value={imageUrlInput}
              onChange={(e) => setImageUrlInput(e.target.value)}
              className="flex-1 px-3 py-1.5 text-xs border border-gray-300 rounded bg-white outline-none focus:border-[#00a99d]"
            />
            <button
              type="button"
              onClick={() => handleAddImageUrl()}
              className="px-3 py-1.5 bg-[#00a99d] text-white text-xs font-semibold rounded hover:bg-[#008f85] transition"
            >
              Add URL
            </button>
          </div>
          <div className="flex items-center gap-2 pt-1 text-[11px] text-gray-500">
            <span>Quick presets:</span>
            {samplePresets.map((preset) => (
              <button
                key={preset.label}
                type="button"
                onClick={() => handleAddImageUrl(preset.url)}
                className="px-2 py-0.5 bg-white border border-gray-300 hover:border-[#00a99d] hover:text-[#00a99d] rounded text-[11px] cursor-pointer transition"
              >
                + {preset.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*"
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />

      {/* Drag & Drop Area */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`border-2 border-dashed rounded-[4px] py-10 px-6 text-center cursor-pointer transition-colors ${
          isDragging
            ? "border-[#00a99d] bg-teal-50/20"
            : "border-[#e2e8f0] bg-[#fafbfc] hover:bg-[#f7fafc]"
        }`}
      >
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="w-14 h-14 rounded-full flex items-center justify-center text-[#94a3b8]">
            <UploadCloud className="w-10 h-10 stroke-[1.2]" />
          </div>
          <div className="text-sm text-[#718096]">
            Drag and drop images here or{" "}
            <span className="text-[#00a99d] underline font-medium">
              Browse Files
            </span>
          </div>
          <p className="text-[11px] text-gray-400">PNG, JPG, WEBP, or GIF up to 5MB</p>
        </div>
      </div>

      {/* Preview Grid if any images uploaded */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 pt-2">
          {images.map((img) => (
            <div
              key={img.id}
              className={`relative group aspect-square rounded border overflow-hidden bg-gray-50 ${
                img.isMain ? "ring-2 ring-[#00a99d]" : "border-gray-200"
              }`}
            >
              <img
                src={img.url}
                alt={img.name}
                className="w-full h-full object-cover"
              />
              {/* Delete button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeImage(img.id);
                }}
                className="absolute top-1 right-1 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="w-3.5 h-3.5" />
              </button>
              {/* Main Badge/Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setMainImage(img.id);
                }}
                className={`absolute bottom-1 left-1 text-[11px] px-2 py-0.5 rounded font-medium flex items-center gap-1 ${
                  img.isMain
                    ? "bg-[#00a99d] text-white"
                    : "bg-black/60 text-white opacity-0 group-hover:opacity-100 hover:bg-[#00a99d]"
                }`}
              >
                {img.isMain && <Check className="w-3 h-3" />}
                Main
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Info Notice */}
      <div className="flex items-center gap-2 text-xs text-[#8c94a0] pt-1">
        <AlertCircle className="w-4 h-4 shrink-0 text-[#8c94a0]" />
        <span>
          You can click on the &quot;Main&quot; button on the images to select the main image of your product
        </span>
      </div>
    </div>
  );
}
