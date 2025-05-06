"use client"

import { CheckIcon } from "lucide-react"

interface FundProgressProps {
  currentStep: number
}

export function FundProgress({ currentStep }: FundProgressProps) {
  const steps = [
    { id: 1, name: "Category" },
    { id: 2, name: "Details" },
    { id: 3, name: "Verification" },
    { id: 4, name: "Image" },
    { id: 5, name: "Success" },
  ]

  return (
    <div className="w-full max-w-3xl mx-auto mb-8">
      <nav aria-label="Progress">
        <ol role="list" className="flex items-center">
          {steps.map((step, stepIdx) => (
            <li key={step.name} className={`relative ${stepIdx !== steps.length - 1 ? "pr-8 sm:pr-20 flex-grow" : ""}`}>
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                {stepIdx !== steps.length - 1 && (
                  <div className={`h-0.5 w-full ${currentStep > step.id ? "bg-green-600" : "bg-gray-200"}`} />
                )}
              </div>
              <div
                className={`relative flex h-8 w-8 items-center justify-center rounded-full ${
                  currentStep > step.id
                    ? "bg-green-600"
                    : currentStep === step.id
                      ? "bg-green-600 border-2 border-green-600"
                      : "bg-white border-2 border-gray-300"
                }`}
              >
                {currentStep > step.id ? (
                  <CheckIcon className="h-5 w-5 text-white" aria-hidden="true" />
                ) : (
                  <span className={`${currentStep === step.id ? "text-white" : "text-gray-500"} text-sm font-medium`}>
                    {step.id}
                  </span>
                )}
              </div>
              <div className="hidden sm:block absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className={`text-sm font-medium ${currentStep >= step.id ? "text-green-600" : "text-gray-500"}`}>
                  {step.name}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  )
}

