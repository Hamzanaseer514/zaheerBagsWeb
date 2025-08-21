import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Factory,
  Shield,
  Globe,
  Truck,
  DollarSign,
  Users,
  GraduationCap,
  Building2,
  Store,
  Scissors,
  Zap,
  CheckCircle,
  Star,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Award,
  Clock,
  Target,
  Settings,
  Layers,
  Wrench,
  Gauge,
  Microscope,
  Palette,
  Recycle,
} from "lucide-react"

export default function SchoolBagLanding() {
  return (
    <div className="min-h-screen bg-background">
      {/* Professional Navbar */}
      <Navbar />

      <section id="home" className="relative bg-gradient-to-br from-blue-50 via-yellow-50 to-green-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Badge
            variant="secondary"
            className="mb-6 text-xs font-medium bg-yellow-100 text-yellow-800 animate-bounce-gentle"
          >
            <Award className="h-4 w-4 mr-2" />
            Trusted by 1000+ Schools Worldwide
            <br />
            Child-Safe Materials Certified
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Premium <span className="text-blue-600">School Bags</span> <br />
            <span className="text-green-600">Made for Kids</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Colorful, durable, and ergonomic school bags designed specifically for children. From kindergarten to high
            school – we create bags that kids love and parents trust for safety and quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700 child-friendly-shadow">
              Get Free School Bag Samples
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-green-500 text-green-600 hover:bg-green-50 bg-transparent"
            >
              View Our School Bag Catalog
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">15+</div>
              <div className="text-sm text-muted-foreground">Years Making School Bags</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">25M+</div>
              <div className="text-sm text-muted-foreground">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">1000+</div>
              <div className="text-sm text-muted-foreground">Schools Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">45+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-500">150+</div>
              <div className="text-sm text-muted-foreground">Colorful Designs</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-blue-300 text-blue-600">
                About KidsBag Pro Manufacturing
              </Badge>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                15+ Years Creating <span className="text-blue-600">Happy School Days</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                Since 2008, KidsBag Pro has been the leading manufacturer of colorful, safe, and durable school bags for
                children worldwide. Our child-focused designs combine fun colors, ergonomic features, and premium safety
                standards to create bags that kids love to carry.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We partner with schools, educational suppliers, and retailers who prioritize children's comfort, safety,
                and happiness. Every bag is designed with input from child development experts and tested by real kids
                to ensure maximum comfort and durability.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Child-Safe Materials</div>
                    <div className="text-sm text-muted-foreground">Non-toxic & BPA-free</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Fast Delivery</div>
                    <div className="text-sm text-muted-foreground">Ready for new school year</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Safety Certified</div>
                    <div className="text-sm text-muted-foreground">International safety standards</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Recycle className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <div className="font-semibold">Eco-Friendly</div>
                    <div className="text-sm text-muted-foreground">Sustainable for future generations</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/colorful-childrens-backpacks.png"
                alt="Colorful school bags for children"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Kid Approved!</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-green-300 text-green-600">
              Our School Bag Collection
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              <span className="text-blue-600">Colorful</span> & <span className="text-green-600">Safe</span> School Bags
              for Every Age
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              From tiny tots to teenagers - we have the perfect school bag in every color, size, and style that kids
              love and parents trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Kindergarten & Preschool Bags",
                description:
                  "Super cute, lightweight bags perfect for little hands. Bright colors and fun characters that make going to school exciting!",
                image: "/colorful-children-baby-bags.png",
                features: ["Extra Light", "Fun Characters", "Easy Zippers", "Name Tags"],
                ageGroup: "Ages 3-6",
                colors: "12 Bright Colors",
                price: "Starting $8",
              },
              {
                title: "Elementary School Backpacks",
                description:
                  "Durable and ergonomic backpacks designed for growing kids. Perfect size for books, lunch, and all school essentials.",
                image: "/colorful-childrens-backpacks.png",
                features: ["Ergonomic Design", "Reflective Strips", "Water Bottle Holder", "Padded Straps"],
                ageGroup: "Ages 6-11",
                colors: "15 Color Options",
                price: "Starting $12",
              },
              {
                title: "Middle School Backpacks",
                description:
                  "Stylish and practical bags for tweens. More mature designs with all the functionality growing students need.",
                image: "/modern-university-backpacks.png",
                features: ["Laptop Sleeve", "Multiple Pockets", "Trendy Designs", "Durable Zippers"],
                ageGroup: "Ages 11-14",
                colors: "10 Cool Colors",
                price: "Starting $18",
              },
              {
                title: "High School Backpacks",
                description:
                  "Teen-approved designs that are both functional and fashionable. Perfect for books, laptops, and personal items.",
                image: "/professional-laptop-bags-briefcases.png",
                features: ["Laptop Compartment", "USB Port", "Anti-Theft Zippers", "Modern Style"],
                ageGroup: "Ages 14-18",
                colors: "8 Sophisticated Colors",
                price: "Starting $25",
              },
              {
                title: "Special Needs School Bags",
                description:
                  "Thoughtfully designed bags for children with special needs. Extra support, easy access, and sensory-friendly materials.",
                image: "/placeholder-bgmmr.png",
                features: ["Extra Support", "Easy Access", "Sensory Friendly", "Adaptive Features"],
                ageGroup: "All Ages",
                colors: "Calming Colors",
                price: "Starting $22",
              },
              {
                title: "Custom School Bags",
                description:
                  "Personalized bags with school logos, names, or custom designs. Perfect for schools wanting branded bags for students.",
                image: "/branded-bags.png",
                features: ["School Logos", "Custom Names", "Bulk Orders", "School Colors"],
                ageGroup: "All Ages",
                colors: "Any Color Combo",
                price: "Quote Based",
              },
            ].map((product, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 child-friendly-shadow"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 animate-wiggle">
                        Kid Favorite!
                      </Badge>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-500 text-white">{product.ageGroup}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-lg mb-3 text-blue-700">{product.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed mb-4 text-sm">
                    {product.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="outline" className="text-xs border-green-300 text-green-600">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div>
                      <strong className="text-purple-600">Colors:</strong> {product.colors}
                    </div>
                    <div>
                      <strong className="text-orange-500">Price:</strong> {product.price}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="manufacturing" className="py-20 px-4 bg-gradient-to-br from-pink-50 via-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-purple-300 text-purple-600 bg-purple-50">
              <Factory className="h-4 w-4 mr-2" />
              Manufacturing Excellence
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              <span className="text-blue-600">Fun</span> & <span className="text-green-600">Safe</span> Manufacturing
              Process
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Our colorful manufacturing setup includes premium child-safe materials, fun machinery, precision tools,
              and rigorous safety testing to ensure every bag is perfect for kids!
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-purple-700">
              Premium Child-Safe Materials & Components
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  category: "Colorful Fabric Materials",
                  items: [
                    "600D/1200D/1680D Polyester",
                    "Ripstop Nylon",
                    "Canvas & Duck Cloth",
                    "Child-Safe PU Materials",
                    "Cordura Fabric",
                    "Waterproof TPU",
                    "Breathable Mesh",
                    "Reflective Safety Materials",
                  ],
                  icon: <Layers className="h-8 w-8" />,
                  color: "bg-blue-100 text-blue-600",
                  borderColor: "border-blue-200",
                },
                {
                  category: "Fun Hardware & Fasteners",
                  items: [
                    "YKK & SBS Colorful Zippers",
                    "Bright Plastic Buckles",
                    "Colorful D-Rings & O-Rings",
                    "Fun Magnetic Snaps",
                    "Velcro Fasteners",
                    "Cord Locks",
                    "Decorative Grommets",
                    "Safety Rivets & Studs",
                  ],
                  icon: <Settings className="h-8 w-8" />,
                  color: "bg-green-100 text-green-600",
                  borderColor: "border-green-200",
                },
                {
                  category: "Soft Padding & Comfort",
                  items: [
                    "Memory Foam Padding",
                    "EVA Foam Sheets",
                    "PE Foam Backing",
                    "Laptop Protection Padding",
                    "Shoulder Comfort Inserts",
                    "Back Panel Cushioning",
                    "Divider Inserts",
                    "Protective Foam",
                  ],
                  icon: <Shield className="h-8 w-8" />,
                  color: "bg-purple-100 text-purple-600",
                  borderColor: "border-purple-200",
                },
                {
                  category: "Comfortable Straps & Handles",
                  items: [
                    "Adjustable Shoulder Straps",
                    "Padded Handle Grips",
                    "Chest & Waist Straps",
                    "Compression Straps",
                    "Colorful Webbing Materials",
                    "Elastic Cords",
                    "Bungee Cords",
                    "Fun Carabiner Clips",
                  ],
                  icon: <Wrench className="h-8 w-8" />,
                  color: "bg-orange-100 text-orange-600",
                  borderColor: "border-orange-200",
                },
              ].map((section, index) => (
                <Card
                  key={index}
                  className={`text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 child-friendly-shadow ${section.borderColor} border-2`}
                >
                  <CardHeader>
                    <div className={`mx-auto mb-4 p-3 ${section.color} rounded-full`}>{section.icon}</div>
                    <CardTitle className="text-lg text-blue-700">{section.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground text-left">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-green-700">Fun Manufacturing Equipment</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  category: "Cutting & Pattern Making",
                  items: [
                    "CAD Pattern Design Systems",
                    "Automated Fabric Cutting Machines",
                    "Laser Cutting Equipment",
                    "Die Cutting Machines",
                    "Ultrasonic Cutting Tools",
                    "Rotary Fabric Cutters",
                  ],
                  icon: <Scissors className="h-8 w-8" />,
                  color: "bg-pink-100 text-pink-600",
                  borderColor: "border-pink-200",
                },
                {
                  category: "Sewing & Assembly",
                  items: [
                    "Industrial Sewing Machines",
                    "Overlock Sergers",
                    "Bartack Machines",
                    "Zigzag Stitching Machines",
                    "Walking Foot Machines",
                    "Binding Machines",
                  ],
                  icon: <Settings className="h-8 w-8" />,
                  color: "bg-yellow-100 text-yellow-600",
                  borderColor: "border-yellow-200",
                },
                {
                  category: "Finishing & Decoration",
                  items: [
                    "Heat Press Machines",
                    "Embroidery Systems",
                    "Screen Printing Equipment",
                    "Digital Printing Machines",
                    "Hot Stamping Machines",
                    "Ultrasonic Welding",
                  ],
                  icon: <Zap className="h-8 w-8" />,
                  color: "bg-cyan-100 text-cyan-600",
                  borderColor: "border-cyan-200",
                },
                {
                  category: "Quality Testing Equipment",
                  items: [
                    "Tensile Strength Testers",
                    "Water Resistance Testing",
                    "Zipper Fatigue Testing",
                    "Color Fastness Testing",
                    "Abrasion Resistance Testing",
                    "Load Testing Equipment",
                  ],
                  icon: <Gauge className="h-8 w-8" />,
                  color: "bg-indigo-100 text-indigo-600",
                  borderColor: "border-indigo-200",
                },
                {
                  category: "Specialized Tools",
                  items: [
                    "Grommet Setting Machines",
                    "Rivet Installation Tools",
                    "Bias Tape Makers",
                    "Seam Sealers",
                    "Edge Binding Machines",
                    "Handle Attachment Tools",
                  ],
                  icon: <Wrench className="h-8 w-8" />,
                  color: "bg-emerald-100 text-emerald-600",
                  borderColor: "border-emerald-200",
                },
                {
                  category: "Quality Control Lab",
                  items: [
                    "Microscopic Analysis",
                    "Chemical Testing Equipment",
                    "Environmental Testing Chambers",
                    "Durability Testing Machines",
                    "Measurement & Calibration Tools",
                    "Sample Testing Stations",
                  ],
                  icon: <Microscope className="h-8 w-8" />,
                  color: "bg-rose-100 text-rose-600",
                  borderColor: "border-rose-200",
                },
              ].map((section, index) => (
                <Card
                  key={index}
                  className={`text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 child-friendly-shadow ${section.borderColor} border-2`}
                >
                  <CardHeader>
                    <div className={`mx-auto mb-4 p-3 ${section.color} rounded-full`}>{section.icon}</div>
                    <CardTitle className="text-lg text-purple-700">{section.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground text-left">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-orange-700">Our Fun Manufacturing Process</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Design & Development",
                  description: "CAD design, prototyping, and sample creation with client feedback integration.",
                  icon: <Palette className="h-6 w-6" />,
                  bgColor: "bg-gradient-to-br from-blue-400 to-blue-600",
                  cardColor: "bg-blue-50 border-blue-200",
                },
                {
                  step: "2",
                  title: "Material Sourcing",
                  description: "Premium material selection and quality verification from certified suppliers.",
                  icon: <Layers className="h-6 w-6" />,
                  bgColor: "bg-gradient-to-br from-green-400 to-green-600",
                  cardColor: "bg-green-50 border-green-200",
                },
                {
                  step: "3",
                  title: "Cutting & Preparation",
                  description: "Precision cutting using automated systems and careful component preparation.",
                  icon: <Scissors className="h-6 w-6" />,
                  bgColor: "bg-gradient-to-br from-purple-400 to-purple-600",
                  cardColor: "bg-purple-50 border-purple-200",
                },
                {
                  step: "4",
                  title: "Assembly & Finishing",
                  description: "Expert assembly, quality control, and final finishing with branding application.",
                  icon: <CheckCircle className="h-6 w-6" />,
                  bgColor: "bg-gradient-to-br from-orange-400 to-orange-600",
                  cardColor: "bg-orange-50 border-orange-200",
                },
              ].map((process, index) => (
                <Card
                  key={index}
                  className={`text-center relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1 child-friendly-shadow ${process.cardColor} border-2`}
                >
                  <CardContent className="pt-6">
                    <div
                      className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 ${process.bgColor} text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg`}
                    >
                      {process.step}
                    </div>
                    <div className={`mx-auto mb-4 p-3 ${process.bgColor} rounded-full text-white w-fit mt-4 shadow-lg`}>
                      {process.icon}
                    </div>
                    <CardTitle className="text-lg mb-3 text-blue-700">{process.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">{process.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-pink-300 text-pink-600 bg-pink-50">
              <Star className="h-4 w-4 mr-2" />
              Our Colorful Work
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              <span className="text-purple-600">Portfolio</span> &{" "}
              <span className="text-green-600">Manufacturing Gallery</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Explore our extensive portfolio of colorful school bag projects and get an inside look at our fun
              manufacturing processes!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Corporate Laptop Bags - TechCorp",
                description: "5,000 custom branded laptop bags with logo embroidery",
                image: "/placeholder-xte70.png",
              },
              {
                title: "University Backpacks - State University",
                description: "15,000 student backpacks with university colors and logo",
                image: "/placeholder-icyhu.png",
              },
              {
                title: "Travel Bags - Adventure Co",
                description: "3,000 premium travel duffel bags for outdoor retailer",
                image: "/placeholder-9dr53.png",
              },
              {
                title: "School Bags - Education District",
                description: "25,000 ergonomic school bags for K-12 students",
                image: "/colorful-ergonomic-school-bags.png",
              },
              {
                title: "Sports Bags - Athletic League",
                description: "8,000 team sports bags with custom team logos",
                image: "/placeholder-gusxi.png",
              },
              {
                title: "Manufacturing Process",
                description: "Inside our state-of-the-art production facility",
                image: "/placeholder-9af38.png",
              },
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-blue-300 text-blue-600 bg-blue-50">
              <Award className="h-4 w-4 mr-2" />
              Why Choose Us
            </Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Choose <span className="text-blue-600">KidsBag</span>
              <span className="text-green-600">Pro</span> as Your School Bag Partner
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We deliver exceptional value through our child-focused manufacturing, colorful innovations, and unwavering
              commitment to making kids happy!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Factory className="h-12 w-12" />,
                title: "Massive Production Capacity",
                description:
                  "Handle orders from 500 to 500,000+ colorful school bags with consistent quality and guaranteed on-time delivery for the new school year.",
                color: "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
                borderColor: "border-blue-200",
              },
              {
                icon: <Users className="h-12 w-12" />,
                title: "Complete Custom Solutions",
                description:
                  "Full design-to-delivery service including fun CAD designs, colorful prototyping, custom school branding, and unique material combinations.",
                color: "bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white",
                borderColor: "border-green-200",
              },
              {
                icon: <Shield className="h-12 w-12" />,
                title: "Child-Safe Quality Assurance",
                description:
                  "ISO 9001:2015 certified processes with 15-point safety control system ensuring 99.9% quality rate and child safety compliance.",
                color: "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
                borderColor: "border-purple-200",
              },
              {
                icon: <Globe className="h-12 w-12" />,
                title: "Global School Network",
                description:
                  "Reliable worldwide shipping to schools with real-time tracking, insurance coverage, and partnerships with educational logistics providers.",
                color: "bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white",
                borderColor: "border-orange-200",
              },
              {
                icon: <DollarSign className="h-12 w-12" />,
                title: "School-Friendly Pricing",
                description:
                  "Volume-based pricing tiers, flexible payment terms for schools, and cost optimization strategies for maximum educational value.",
                color: "bg-pink-100 text-pink-600 group-hover:bg-pink-600 group-hover:text-white",
                borderColor: "border-pink-200",
              },
              {
                icon: <Truck className="h-12 w-12" />,
                title: "Back-to-School Express",
                description:
                  "Standard 7-21 day production cycles with rush order capabilities for last-minute school orders and expedited shipping options.",
                color: "bg-cyan-100 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white",
                borderColor: "border-cyan-200",
              },
              {
                icon: <Award className="h-12 w-12" />,
                title: "Child Safety Certifications",
                description:
                  "BSCI ethical manufacturing, child-safe material standards, and environmental compliance certifications for peace of mind.",
                color: "bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white",
                borderColor: "border-indigo-200",
              },
              {
                icon: <Recycle className="h-12 w-12" />,
                title: "Eco-Friendly for Kids' Future",
                description:
                  "Eco-friendly materials, waste reduction programs, and carbon-neutral shipping options for environmentally conscious schools.",
                color: "bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
                borderColor: "border-emerald-200",
              },
              {
                icon: <Target className="h-12 w-12" />,
                title: "Dedicated School Support",
                description:
                  "Personal school account managers, 24/7 customer support, and dedicated project teams for seamless communication and service.",
                color: "bg-rose-100 text-rose-600 group-hover:bg-rose-600 group-hover:text-white",
                borderColor: "border-rose-200",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={`text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 child-friendly-shadow ${feature.borderColor} border-2`}
              >
                <CardHeader>
                  <div className={`mx-auto mb-4 p-4 ${feature.color} rounded-full transition-colors shadow-lg`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-blue-700">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="py-20 px-4 bg-gradient-to-br from-purple-50 via-yellow-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-green-300 text-green-600 bg-green-50">
              <Building2 className="h-4 w-4 mr-2" />
              Who We Serve
            </Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              <span className="text-purple-600">Schools</span> &{" "}
              <span className="text-blue-600">Educational Partners</span> We Serve
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trusted by diverse educational institutions worldwide for their colorful school bag needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <GraduationCap className="h-10 w-10" />,
                title: "Education Sector",
                description: "Schools, Colleges, Universities",
                color: "bg-blue-100 text-blue-600",
                borderColor: "border-blue-200",
              },
              {
                icon: <Building2 className="h-10 w-10" />,
                title: "Educational Suppliers",
                description: "School Supply Companies",
                color: "bg-green-100 text-green-600",
                borderColor: "border-green-200",
              },
              {
                icon: <Store className="h-10 w-10" />,
                title: "Retail Partners",
                description: "Educational Retailers & Wholesalers",
                color: "bg-purple-100 text-purple-600",
                borderColor: "border-purple-200",
              },
              {
                icon: <Users className="h-10 w-10" />,
                title: "Parent Groups",
                description: "PTAs & Parent Organizations",
                color: "bg-orange-100 text-orange-600",
                borderColor: "border-orange-200",
              },
            ].map((industry, index) => (
              <Card
                key={index}
                className={`text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 child-friendly-shadow ${industry.borderColor} border-2`}
              >
                <CardContent className="pt-6">
                  <div className={`mx-auto mb-4 p-3 ${industry.color} rounded-full w-fit shadow-lg`}>
                    {industry.icon}
                  </div>
                  <CardTitle className="text-lg mb-2 text-blue-700">{industry.title}</CardTitle>
                  <CardDescription>{industry.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">What Our Partners Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from our satisfied business partners about their experience working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Outstanding quality and reliability. We've been ordering 50,000+ school bags annually for 5 years. Never disappointed.",
                author: "Sarah Johnson",
                company: "EduSupply Distributors",
                rating: 5,
              },
              {
                quote:
                  "Their custom branding service is exceptional. Perfect logo placement and color matching every time.",
                author: "Michael Chen",
                company: "TechCorp Solutions",
                rating: 5,
              },
              {
                quote:
                  "Fast delivery, competitive pricing, and excellent customer service. Our go-to manufacturer for all bag needs.",
                author: "Emma Rodriguez",
                company: "Global Retail Partners",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-4 leading-relaxed">"{testimonial.quote}"</blockquote>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-20 px-4 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 text-blue-800"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make School Days More Colorful?</h2>
          <p className="text-blue-800/90 mb-8 max-w-2xl mx-auto">
            Get free samples of our most popular school bags and see why kids love them! Perfect for schools, retailers,
            and educational suppliers.
          </p>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Contact Name *</label>
                    <Input placeholder="Enter your name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                    <Input type="email" placeholder="your@school.edu" required />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">School/Organization *</label>
                    <Input placeholder="School or company name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Quantity Needed</label>
                    <Input placeholder="e.g., 500 bags" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Tell us about your needs</label>
                  <Textarea
                    placeholder="What age group? Preferred colors? Custom logos needed? Any special requirements?"
                    rows={4}
                  />
                </div>
                <Button
                  size="lg"
                  className="w-full text-lg py-6 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold"
                >
                  Get Free School Bag Samples! 🎒
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                KidsBag<span className="text-yellow-400">Pro</span>
              </h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Making school days brighter with colorful, safe, and durable school bags that kids love!
              </p>
              <div className="space-y-3 text-sm text-blue-100">
                <div className="flex items-center gap-3">
                  <div className="p-1 bg-yellow-400/20 rounded">
                    <Phone className="h-4 w-4 text-yellow-400" />
                  </div>
                  +1 (555) KIDS-BAG
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-1 bg-yellow-400/20 rounded">
                    <Mail className="h-4 w-4 text-yellow-400" />
                  </div>
                  hello@kidsbagpro.com
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-1 bg-yellow-400/20 rounded">
                    <MapPin className="h-4 w-4 text-yellow-400" />
                  </div>
                  Kid-Friendly Manufacturing District
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-yellow-400">School Bags</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>Kindergarten Bags</li>
                <li>Elementary Backpacks</li>
                <li>Middle School Bags</li>
                <li>High School Bags</li>
                <li>Custom School Bags</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-yellow-400">Features</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>Child-Safe Materials</li>
                <li>Ergonomic Design</li>
                <li>Bright Colors</li>
                <li>Durable Quality</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-yellow-400">Company</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>About Us</li>
                <li>School Partners</li>
                <li>Safety Standards</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-700 mt-12 pt-8 text-center text-sm text-blue-100">
            <p>
              &copy; 2024 KidsBag Pro Manufacturing. Making school days colorful! | Trusted by 1000+ schools worldwide
              🎒✨
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
