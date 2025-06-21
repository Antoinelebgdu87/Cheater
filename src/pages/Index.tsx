import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Shield,
  Zap,
  Eye,
  Users,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  BarChart3,
  Target,
  Clock,
} from "lucide-react";

const Index = () => {
  const stats = [
    { label: "Détections par jour", value: "50K+", icon: Shield },
    { label: "Serveurs protégés", value: "1,200+", icon: Eye },
    { label: "Utilisateurs actifs", value: "2.5M+", icon: Users },
    { label: "Temps de réponse", value: "<5ms", icon: Zap },
  ];

  const features = [
    {
      icon: Shield,
      title: "Détection Avancée",
      description:
        "IA de pointe pour détecter les cheats et exploits en temps réel",
      color: "text-tech-purple",
    },
    {
      icon: Zap,
      title: "Performance Optimale",
      description:
        "Impact minimal sur les performances avec une protection maximale",
      color: "text-tech-cyan",
    },
    {
      icon: Eye,
      title: "Surveillance 24/7",
      description: "Monitoring continu et alertes instantanées",
      color: "text-tech-blue",
    },
    {
      icon: Target,
      title: "Précision Extrême",
      description: "99.8% de précision avec zéro faux positifs",
      color: "text-tech-purple",
    },
    {
      icon: BarChart3,
      title: "Analytics Détaillées",
      description: "Rapports complets et statistiques en temps réel",
      color: "text-tech-cyan",
    },
    {
      icon: Clock,
      title: "Déploiement Rapide",
      description: "Installation en moins de 5 minutes",
      color: "text-tech-blue",
    },
  ];

  const plans = [
    {
      name: "Starter",
      price: "29€",
      period: "/mois",
      description: "Parfait pour les petits serveurs",
      features: [
        "Jusqu'à 100 joueurs",
        "Détection de base",
        "Support par email",
        "Rapports hebdomadaires",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "79€",
      period: "/mois",
      description: "Idéal pour les serveurs moyens",
      features: [
        "Jusqu'à 500 joueurs",
        "Détection avancée + IA",
        "Support prioritaire 24/7",
        "Rapports en temps réel",
        "API personnalisée",
        "Alertes Discord/Webhook",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "199€",
      period: "/mois",
      description: "Pour les gros serveurs et réseaux",
      features: [
        "Joueurs illimités",
        "Détection IA + Machine Learning",
        "Support dédié premium",
        "Analytics avancées",
        "Intégration personnalisée",
        "SLA garantie 99.9%",
        "Formation équipe",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-tech-dark via-tech-darker to-tech-dark">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm bg-background/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-tech-purple to-tech-cyan rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-tech-purple to-tech-cyan bg-clip-text text-transparent">
              RoTech FR
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Fonctionnalités
            </a>
            <a
              href="#pricing"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Tarifs
            </a>
            <a
              href="#stats"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Statistiques
            </a>
            <Button variant="outline" size="sm">
              Connexion
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-tech-purple to-tech-cyan hover:opacity-90"
            >
              Commencer
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-tech-purple/20 via-transparent to-tech-cyan/20"></div>
        <div className="container mx-auto px-4 py-24 text-center relative">
          <Badge
            variant="secondary"
            className="mb-6 bg-tech-purple/20 text-tech-purple border-tech-purple/30"
          >
            <Zap className="w-3 h-3 mr-1" />
            Nouveau: Détection IA v2.0
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Protection{" "}
            <span className="bg-gradient-to-r from-tech-purple via-tech-cyan to-tech-blue bg-clip-text text-transparent">
              AntiCheat
            </span>
            <br />
            Nouvelle Génération
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            RoTech FR révolutionne la sécurité gaming avec une IA avancée qui
            détecte et bloque tous les types de cheats sur Roblox en temps réel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-tech-purple to-tech-cyan hover:opacity-90 px-8"
            >
              <Shield className="w-5 h-5 mr-2" />
              Démarrer Gratuitement
            </Button>
            <Button size="lg" variant="outline">
              <Eye className="w-5 h-5 mr-2" />
              Voir la Démo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              99.8% de précision
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-tech-cyan" />
              Protection 24/7
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-tech-purple" />
              2.5M+ utilisateurs
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 border-t border-border/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-tech-purple/20 to-tech-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4 border border-tech-purple/30">
                  <stat.icon className="w-6 h-6 text-tech-purple" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 border-t border-border/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technologie de Pointe
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Notre système utilise l'intelligence artificielle et le machine
              learning pour une protection inégalée contre tous les types de
              cheats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-border/40 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br from-tech-purple/20 to-tech-cyan/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-tech-purple/30`}
                  >
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 border-t border-border/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tarifs Transparents
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choisissez la solution parfaite pour votre serveur. Pas de frais
              cachés, pas d'engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative border-border/40 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 ${plan.popular ? "ring-2 ring-tech-purple/50 scale-105" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-tech-purple to-tech-cyan text-white">
                      Plus Populaire
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center gap-1 my-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <CardDescription className="text-base">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.popular ? "bg-gradient-to-r from-tech-purple to-tech-cyan hover:opacity-90" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Choisir ce Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border/40">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à Sécuriser Votre Serveur ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Rejoignez plus de 1,200 serveurs qui font confiance à RoTech FR
              pour protéger leur communauté contre les cheats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-tech-purple to-tech-cyan hover:opacity-90 px-8"
              >
                <Shield className="w-5 h-5 mr-2" />
                Commencer Maintenant
              </Button>
              <Button size="lg" variant="outline">
                Parler à un Expert
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-tech-purple to-tech-cyan rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-tech-purple to-tech-cyan bg-clip-text text-transparent">
                  RoTech FR
                </span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                La solution anticheat de nouvelle génération pour protéger vos
                serveurs Roblox avec une précision inégalée.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4" />
                Sécurité garantie 24/7
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Produit</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Fonctionnalités
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Tarifs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Centre d'aide
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Statut
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/40 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 RoTech FR. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Conditions d'utilisation
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
