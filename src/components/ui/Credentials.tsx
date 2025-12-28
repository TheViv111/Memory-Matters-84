import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, GraduationCap, Users, Shield, Star, BookOpen, School, Briefcase, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';

// --- Shared Data ---
const certifications = [
    {
        icon: Award,
        title: "Postgraduate Training",
        subtitle: "DPM (Psychiatry) - LTM Medical College, Mumbai",
        details: ["DPM (Psychiatry)", "LTM Medical College, Mumbai"],
        year: "2001",
        color: "text-medical-teal"
    },
    {
        icon: GraduationCap,
        title: "Specialist Training",
        subtitle: "MRCPsych & CCT in Old Age Psychiatry - UK",
        details: ["MRCPsych - Royal College of Psychiatrists, UK", "CCT in Old Age Psychiatry - UK"],
        year: "2010",
        color: "text-medical-deep-blue"
    },
    {
        icon: BookOpen,
        title: "Advanced Education",
        subtitle: "MMedSci (Clinical Psychiatry) - UK",
        details: ["MMedSci (Clinical Psychiatry) - UK"],
        year: "2012",
        color: "text-medical-orange"
    },
    {
        icon: Users,
        title: "Clinical Experience",
        subtitle: "20+ Years in Geriatric Psychiatry",
        details: ["20+ Years Experience", "Consultant Psychiatrist (2017-2024)"],
        year: "Current",
        color: "text-medical-teal"
    }
];

const achievements = [
    {
        icon: Star,
        title: "Top Doctor Award",
        organization: "Bangalore Medical Association",
        year: "2023",
        color: "text-yellow-500"
    },
    {
        icon: Shield,
        title: "Excellence in Care",
        organization: "Karnataka Medical Council",
        year: "2022",
        color: "text-medical-deep-blue"
    },
    {
        icon: Award,
        title: "Research Excellence",
        organization: "International Geriatric Society",
        year: "2021",
        color: "text-medical-orange"
    }
];

const affiliations = [
    { title: "Indian Psychiatric Society", type: "Life Member" },
    { title: "Royal College of Psychiatrists", type: "Member" },
    { title: "Specialist Register in Geriatric Psychiatry", type: "Registered" }
];

// --- Components ---

export const CredentialsGrid = () => {
    return (
        <section className="py-12 bg-gradient-to-br from-medical-beige/30 to-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-6 py-2 bg-medical-teal/10 rounded-full mb-6"
                    >
                        <span className="text-medical-teal font-inter text-sm font-medium">Professional Excellence</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-playfair text-4xl md:text-5xl text-medical-charcoal mb-6"
                    >
                        Credentials & Recognition
                    </motion.h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-medical-teal to-medical-orange mx-auto mb-6"></div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="font-inter text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Recognized expertise in geriatric psychiatry with extensive training and continuous professional development
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                        >
                            <Card className="h-full group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg cursor-default">
                                <CardContent className="p-6 text-center h-full flex flex-col items-center">
                                    <div className={`mb-4 p-4 bg-gradient-to-br from-medical-teal/10 to-medical-deep-blue/10 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300`}>
                                        <cert.icon className={`w-8 h-8 ${cert.color}`} />
                                    </div>
                                    <h3 className="font-playfair text-lg font-semibold text-medical-charcoal mb-2">
                                        {cert.title}
                                    </h3>
                                    <p className="font-inter text-sm text-gray-600 mb-4 flex-grow">
                                        {cert.subtitle}
                                    </p>
                                    <span className="inline-block px-3 py-1 bg-medical-teal/10 text-medical-teal font-inter text-xs font-medium rounded-full mt-auto">
                                        {cert.year}
                                    </span>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const CredentialsList = () => {
    return (
        <section className="py-12 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-72 h-72 bg-medical-teal/5 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-medical-orange/5 rounded-full blur-3xl opacity-50" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-12">
                    <h2 className="font-playfair text-3xl md:text-4xl text-medical-charcoal mb-4">
                        Professional Qualifications
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-medical-teal to-medical-orange mx-auto mb-6 rounded-full"></div>
                </div>

                <div className="space-y-8">
                    {/* Education */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-medical-teal/10 rounded-xl">
                                <School className="w-8 h-8 text-medical-teal" />
                            </div>
                            <h3 className="font-playfair text-2xl text-medical-charcoal">Education</h3>
                        </div>
                        <ul className="space-y-4 ml-4 md:ml-16">
                            <li className="flex gap-4 items-start">
                                <span className="w-2 h-2 rounded-full bg-medical-teal mt-2 flex-shrink-0" />
                                <div>
                                    <p className="font-inter text-gray-700">MBBS - Grant Medical College & Sir JJ Hospital, Mumbai</p>
                                    <span className="text-xs text-gray-500 font-medium">1998</span>
                                </div>
                            </li>
                            {certifications.filter(c => c.title !== "Clinical Experience").map((cert, i) => (
                                <li key={i} className="flex gap-4 items-start">
                                    <span className="w-2 h-2 rounded-full bg-medical-teal mt-2 flex-shrink-0" />
                                    <div>
                                        {cert.details.map((detail, d_i) => (
                                            <p key={d_i} className="font-inter text-gray-700">{detail}</p>
                                        ))}
                                        <span className="text-xs text-gray-500 font-medium">{cert.year}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Experience & Affiliations */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-medical-deep-blue/10 rounded-xl">
                                    <Briefcase className="w-6 h-6 text-medical-deep-blue" />
                                </div>
                                <h3 className="font-playfair text-xl text-medical-charcoal">Experience</h3>
                            </div>
                            <ul className="space-y-3">
                                <li className="font-inter text-gray-700 border-l-2 border-medical-deep-blue pl-4 py-1">
                                    20+ Years in Geriatric Psychiatry
                                </li>
                                <li className="font-inter text-gray-700 border-l-2 border-medical-deep-blue pl-4 py-1">
                                    Consultant Psychiatrist (2017-2024)
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-medical-orange/10 rounded-xl">
                                    <FileCheck className="w-6 h-6 text-medical-orange" />
                                </div>
                                <h3 className="font-playfair text-xl text-medical-charcoal">Affiliations</h3>
                            </div>
                            <ul className="space-y-3">
                                {affiliations.map((aff, i) => (
                                    <li key={i} className="font-inter text-gray-700 flex items-center gap-2">
                                        <Shield className="w-4 h-4 text-medical-orange" />
                                        {aff.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
