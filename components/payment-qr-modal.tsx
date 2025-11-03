"use client"

import { QRCodeSVG } from "qrcode.react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface PaymentQRModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  upiLink: string
  amount: string
  userName: string
  onPaymentComplete?: () => void
}

export function PaymentQRModal({
  open,
  onOpenChange,
  upiLink,
  amount,
  userName,
  onPaymentComplete,
}: PaymentQRModalProps) {
  const handlePaymentComplete = () => {
    if (onPaymentComplete) {
      onPaymentComplete()
    }
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-sentient text-2xl text-center">
            Scan to Pay
          </DialogTitle>
          <DialogDescription className="text-center font-mono text-xs sm:text-sm">
            Scan this QR code with any UPI app on your phone
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center gap-6 py-4">
          {/* QR Code Container */}
          <div
            className="bg-white p-4 sm:p-6 rounded-lg"
            style={{
              clipPath:
                "polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)",
            }}
          >
            <QRCodeSVG
              value={upiLink}
              size={256}
              level="H"
              includeMargin={false}
              className="w-full h-auto"
            />
          </div>

          {/* Payment Details */}
          <div className="w-full space-y-3">
            <div
              className="bg-[#262626]/50 border border-border px-4 py-3 text-center"
              style={{
                clipPath:
                  "polygon(6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px), 0 6px)",
              }}
            >
              <p className="text-foreground/60 font-mono text-xs mb-1">Amount</p>
              <p className="text-2xl font-sentient text-primary">₹{amount}</p>
            </div>

            <div
              className="bg-[#262626]/50 border border-border px-4 py-3 text-center"
              style={{
                clipPath:
                  "polygon(6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px), 0 6px)",
              }}
            >
              <p className="text-foreground/60 font-mono text-xs mb-1">Paying to</p>
              <p className="text-sm font-mono">DeployUnion NST</p>
            </div>
          </div>

          {/* Instructions */}
          <div className="w-full space-y-2">
            <p className="text-foreground/70 font-mono text-xs text-center mb-2">
              How to pay:
            </p>
            <ol className="text-foreground/60 font-mono text-xs space-y-1.5 list-decimal list-inside">
              <li>Open any UPI app (GPay, PhonePe, Paytm, etc.)</li>
              <li>Scan this QR code with your phone camera</li>
              <li>Verify the amount and complete payment</li>
            </ol>
          </div>

          {/* Action Button */}
          <Button
            onClick={handlePaymentComplete}
            className="w-full mt-4"
            variant="outline"
          >
            I've Completed Payment
          </Button>

          <p className="text-foreground/40 font-mono text-xs text-center">
            Secure payment via UPI
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

