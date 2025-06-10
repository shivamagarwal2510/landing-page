import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Zap, BarChart3, Users, ShieldCheck, Settings, Layers } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const features = [
  {
    icon: <Zap className="h-8 w-8 text-primary mb-3" />,
    title: "Blazing Fast Performance",
    description: "Experience unparalleled speed and responsiveness with our optimized infrastructure.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-primary mb-3" />,
    title: "Advanced Analytics",
    description: "Gain deep insights into your data with our comprehensive analytics dashboard.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary mb-3" />,
    title: "Team Collaboration",
    description: "Work seamlessly with your team using our integrated collaboration tools.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary mb-3" />,
    title: "Top-Tier Security",
    description: "Protect your data with enterprise-grade security features and protocols.",
  },
  {
    icon: <Settings className="h-8 w-8 text-primary mb-3" />,
    title: "Easy Customization",
    description: "Tailor the platform to your specific needs with flexible customization options.",
  },
  {
    icon: <Layers className="h-8 w-8 text-primary mb-3" />,
    title: "Scalable Architecture",
    description: "Grow your projects effortlessly with our highly scalable infrastructure.",
  },
];

export default function FeaturesSection() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="features" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover a comprehensive suite of features designed to elevate your projects and streamline your workflow.
          </p>
          <Separator className="w-24 h-1 bg-primary mx-auto mt-6" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Adjust amount for when grid animation starts
          variants={sectionVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 ease-in-out border-border/70 hover:border-primary/50">
                <CardHeader className="items-center text-center sm:items-start sm:text-left">
                  {feature.icon}
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center sm:text-left">
                  <CardDescription className="text-muted-foreground text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
