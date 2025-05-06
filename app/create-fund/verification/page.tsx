"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { FundProgress } from "@/components/fund-progress"
import { UploadIcon, FileTextIcon, CheckCircleIcon, XCircleIcon } from "lucide-react"

type DocumentType = "doctorsReport" | "hospitalBills" | "other"

interface DocumentStatus {
  doctorsReport: File[] | null
  hospitalBills: File[] | null
  other: File[] | null
}

export default function VerificationPage() {
  const router = useRouter()
  const [documents, setDocuments] = useState<DocumentStatus>({
    doctorsReport: null,
    hospitalBills: null,
    other: null,
  })
  const [uploading, setUploading] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: DocumentType) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files)
      setDocuments((prev) => ({
        ...prev,
        [type]: newFiles,
      }))
    }
  }

  const removeFile = (type: DocumentType) => {
    setDocuments((prev) => ({
      ...prev,
      [type]: null,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setUploading(true)

    // Simulate upload delay
    setTimeout(() => {
      // In a real app, you would upload files to a server
      setUploading(false)
      router.push("/create-fund/addimage") // Changed from '/create-fund/success'
    }, 1500)
  }

  const isFormValid = documents.doctorsReport || documents.hospitalBills || documents.other

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold text-center mb-2">Verification</h1>
            <p className="text-gray-500 text-center mb-8">Upload relevant medical documents to verify your campaign</p>

            <FundProgress currentStep={3} />

            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Required Documents</h2>
                    <p className="text-sm text-gray-500 mb-4">
                      Please upload at least one of the following document types to verify your medical need.
                    </p>

                    {/* Doctor's Report */}
                    <div className="border rounded-lg overflow-hidden">
                      <div className="flex items-center justify-between p-4 bg-gray-50">
                        <div className="flex items-center gap-3">
                          <FileTextIcon className="h-5 w-5 text-gray-500" />
                          <div>
                            <h3 className="font-medium">Doctor's Report</h3>
                            <p className="text-sm text-gray-500">Medical diagnosis, treatment plan, etc.</p>
                          </div>
                        </div>
                        <div>
                          {documents.doctorsReport ? (
                            <div className="flex items-center gap-2">
                              <CheckCircleIcon className="h-5 w-5 text-green-600" />
                              <span className="text-sm text-green-600">Uploaded</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2">
                              <XCircleIcon className="h-5 w-5 text-gray-400" />
                              <span className="text-sm text-gray-500">Required</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="p-4 border-t">
                        {documents.doctorsReport ? (
                          <div className="space-y-3">
                            {documents.doctorsReport.map((file, index) => (
                              <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                                <div className="flex items-center">
                                  <FileTextIcon className="h-5 w-5 text-gray-400 mr-2" />
                                  <span className="text-sm truncate max-w-[200px]">{file.name}</span>
                                </div>
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeFile("doctorsReport")}
                                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                >
                                  Remove
                                </Button>
                              </div>
                            ))}
                            <div className="flex justify-end">
                              <label htmlFor="doctorsReport">
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="sm"
                                  className="border-green-600 text-green-600"
                                  onClick={() => document.getElementById("doctorsReport")?.click()}
                                >
                                  Replace File
                                </Button>
                              </label>
                            </div>
                          </div>
                        ) : (
                          <div className="flex justify-center">
                            <input
                              id="doctorsReport"
                              type="file"
                              multiple
                              className="hidden"
                              onChange={(e) => handleFileChange(e, "doctorsReport")}
                              accept=".pdf,.jpg,.jpeg,.png"
                            />
                            <label htmlFor="doctorsReport">
                              <Button
                                type="button"
                                variant="outline"
                                className="border-green-600 text-green-600"
                                onClick={() => document.getElementById("doctorsReport")?.click()}
                              >
                                <UploadIcon className="h-4 w-4 mr-2" />
                                Upload Doctor's Report
                              </Button>
                            </label>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Hospital Bills */}
                    <div className="border rounded-lg overflow-hidden">
                      <div className="flex items-center justify-between p-4 bg-gray-50">
                        <div className="flex items-center gap-3">
                          <FileTextIcon className="h-5 w-5 text-gray-500" />
                          <div>
                            <h3 className="font-medium">Hospital Bills</h3>
                            <p className="text-sm text-gray-500">Invoices, receipts, cost estimates</p>
                          </div>
                        </div>
                        <div>
                          {documents.hospitalBills ? (
                            <div className="flex items-center gap-2">
                              <CheckCircleIcon className="h-5 w-5 text-green-600" />
                              <span className="text-sm text-green-600">Uploaded</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2">
                              <XCircleIcon className="h-5 w-5 text-gray-400" />
                              <span className="text-sm text-gray-500">Required</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="p-4 border-t">
                        {documents.hospitalBills ? (
                          <div className="space-y-3">
                            {documents.hospitalBills.map((file, index) => (
                              <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                                <div className="flex items-center">
                                  <FileTextIcon className="h-5 w-5 text-gray-400 mr-2" />
                                  <span className="text-sm truncate max-w-[200px]">{file.name}</span>
                                </div>
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeFile("hospitalBills")}
                                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                >
                                  Remove
                                </Button>
                              </div>
                            ))}
                            <div className="flex justify-end">
                              <label htmlFor="hospitalBills">
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="sm"
                                  className="border-green-600 text-green-600"
                                  onClick={() => document.getElementById("hospitalBills")?.click()}
                                >
                                  Replace File
                                </Button>
                              </label>
                            </div>
                          </div>
                        ) : (
                          <div className="flex justify-center">
                            <input
                              id="hospitalBills"
                              type="file"
                              multiple
                              className="hidden"
                              onChange={(e) => handleFileChange(e, "hospitalBills")}
                              accept=".pdf,.jpg,.jpeg,.png"
                            />
                            <label htmlFor="hospitalBills">
                              <Button
                                type="button"
                                variant="outline"
                                className="border-green-600 text-green-600"
                                onClick={() => document.getElementById("hospitalBills")?.click()}
                              >
                                <UploadIcon className="h-4 w-4 mr-2" />
                                Upload Hospital Bills
                              </Button>
                            </label>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Other Documents */}
                    <div className="border rounded-lg overflow-hidden">
                      <div className="flex items-center justify-between p-4 bg-gray-50">
                        <div className="flex items-center gap-3">
                          <FileTextIcon className="h-5 w-5 text-gray-500" />
                          <div>
                            <h3 className="font-medium">Other Supporting Documents</h3>
                            <p className="text-sm text-gray-500">Insurance claims, referrals, etc.</p>
                          </div>
                        </div>
                        <div>
                          {documents.other ? (
                            <div className="flex items-center gap-2">
                              <CheckCircleIcon className="h-5 w-5 text-green-600" />
                              <span className="text-sm text-green-600">Uploaded</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2">
                              <XCircleIcon className="h-5 w-5 text-gray-400" />
                              <span className="text-sm text-gray-500">Optional</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="p-4 border-t">
                        {documents.other ? (
                          <div className="space-y-3">
                            {documents.other.map((file, index) => (
                              <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                                <div className="flex items-center">
                                  <FileTextIcon className="h-5 w-5 text-gray-400 mr-2" />
                                  <span className="text-sm truncate max-w-[200px]">{file.name}</span>
                                </div>
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeFile("other")}
                                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                >
                                  Remove
                                </Button>
                              </div>
                            ))}
                            <div className="flex justify-end">
                              <label htmlFor="other">
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="sm"
                                  className="border-green-600 text-green-600"
                                  onClick={() => document.getElementById("other")?.click()}
                                >
                                  Replace File
                                </Button>
                              </label>
                            </div>
                          </div>
                        ) : (
                          <div className="flex justify-center">
                            <input
                              id="other"
                              type="file"
                              multiple
                              className="hidden"
                              onChange={(e) => handleFileChange(e, "other")}
                              accept=".pdf,.jpg,.jpeg,.png"
                            />
                            <label htmlFor="other">
                              <Button
                                type="button"
                                variant="outline"
                                className="border-green-600 text-green-600"
                                onClick={() => document.getElementById("other")?.click()}
                              >
                                <UploadIcon className="h-4 w-4 mr-2" />
                                Upload Other Documents
                              </Button>
                            </label>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <p className="text-xs text-gray-500 mb-4">
                      Accepted file types: PDF, JPG, JPEG, PNG. Maximum file size: 10MB per file.
                      <br />
                      All documents are securely stored and will only be used for verification purposes.
                    </p>
                  </div>

                  <div className="flex justify-between pt-4">
                    <Link href="/create-fund/details">
                      <Button type="button" variant="outline" className="border-gray-300">
                        Back
                      </Button>
                    </Link>
                    <Button
                      type="submit"
                      disabled={!isFormValid || uploading}
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      {uploading ? "Uploading..." : "Submit Documents"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}


