import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function CtaSection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-r from-primary to-blue-600 text-primary-foreground">
      <div className="container mx-auto text-center px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <Sparkles className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Ready to Elevate Your Project?
          </h2>
          <p className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-primary-foreground/90">
            Join thousands of innovators who trust LaunchPad to bring their ideas to life.
            Start your journey today!
          </p>
          <Button
            size="lg"
            variant="outline"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:text-primary px-10 py-6 text-lg font-semibold"
          >
            Sign Up Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
