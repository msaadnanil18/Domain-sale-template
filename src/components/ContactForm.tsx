import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Send } from "lucide-react";
import { Textarea } from "./ui/textarea";

interface FormData {
  fullName: string;
  email: string;
  contactNumber: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.contactNumber) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to submit your inquiry.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const email = {
      to: ["sehaj.sk@gmail.com"],
      data: {
        domain_name: window.location.origin,
        name: formData.fullName,
        email: formData.email,
        contact_number: formData.contactNumber,
        message: formData.message,
      },
    };
    await fetch(
      "https://guideu.autovid.ai/api/v1/notification/domain-sale/send-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
      }
    );

    // Log form data (as requested)

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Inquiry sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md mx-auto"
      >
        <Card className="glass-card shadow-large">
          <CardContent className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            >
              <CheckCircle2 className="w-16 h-16 mx-auto mb-4 text-accent" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2">Thank you!</h3>
            <p className="text-muted-foreground mb-4">
              Your inquiry has been submitted successfully. We'll review your
              request and get back to you within 24 hours.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  fullName: "",
                  email: "",
                  contactNumber: "",
                  message: "",
                });
              }}
              className="animate-smooth hover:shadow-soft"
            >
              Send Another Inquiry
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      // className="w-full max-w-md mx-auto"
    >
      <Card className="glass-card shadow-large">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-2xl font-bold">Get in Touch</CardTitle>
          <CardDescription className="text-base">
            Fill out the form below and we'll respond within 24 hours
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Label htmlFor="fullName" className="text-sm font-medium">
                Full Name
              </Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="mt-2 animate-smooth focus:shadow-soft"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                className="mt-2 animate-smooth focus:shadow-soft"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Label htmlFor="contactNumber" className="text-sm font-medium">
                Contact Number
              </Label>
              <Input
                id="contactNumber"
                name="contactNumber"
                type="tel"
                value={formData.contactNumber}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className="mt-2 animate-smooth focus:shadow-soft"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Label htmlFor="contactNumber" className="text-sm font-medium">
                Message <span className=" opacity-50">(Optional)</span>
              </Label>
              <Textarea
                id="message"
                name="message"
                type="text"
                value={formData.contactNumber}
                //@ts-ignore
                onChange={handleInputChange}
                placeholder="Enter your message"
                className="mt-2 animate-smooth focus:shadow-soft"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-2"
            >
              <Button
                type="submit"
                className="w-full gradient-hero shadow-medium animate-smooth hover:shadow-large hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </motion.div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Inquiry
                  </div>
                )}
              </Button>
            </motion.div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactForm;
