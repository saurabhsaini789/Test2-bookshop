import React from 'react';
import { Clock, ShieldCheck, Heart } from 'lucide-react';

export const About: React.FC = () => {
    return (
        <div className="bg-secondary min-h-screen py-16 lg:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto transition-opacity duration-700 ease-in-out">
                    <h1 className="text-4xl font-heading text-dark sm:text-5xl mb-4">
                        Our Story
                    </h1>
                    <div className="h-1 w-24 bg-accent mx-auto rounded mb-6"></div>
                    <p className="text-lg text-gray-700 font-body">
                        A family legacy built on trust, education, and service to our community since 1996.
                    </p>
                </div>

                {/* Part 1 – Grandfather (Foundation and Education) */}
                <div className="flex flex-col md:flex-row items-center gap-12 group">
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-accent rounded-2xl transform translate-x-4 translate-y-4 opacity-50 transition-transform group-hover:translate-x-6 group-hover:translate-y-6 duration-500"></div>
                            <img
                                src="/images/about/grandfather.jpg"
                                alt="Our Grandfather - The Foundation"
                                className="relative rounded-2xl shadow-xl mt-4 ml-4 md:mt-0 md:ml-0 border-4 border-white object-cover w-full max-w-md aspect-[3/4] transition-all duration-500 sepia-[0.1]"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-3xl font-heading text-primary">Our Foundation in Education</h2>
                        <div className="space-y-4 text-gray-700 font-body leading-relaxed text-lg">
                            <p>
                                Our journey is rooted in a deep belief in the power of education. Our grandfather was a respected government school teacher who dedicated his life to guiding and inspiring students. After retiring in 2002, he continued to support the community by helping students and families find the right learning materials.
                            </p>
                            <p>
                                He spent many years sitting in the shop, guiding parents and students with the same care and dedication he showed in the classroom. His values of honesty, discipline, and knowledge remain the foundation of Saini Pustak Bhandar today.
                            </p>
                        </div>
                        <blockquote className="border-l-4 border-accent pl-4 py-2 mt-6 italic text-gray-600 font-body text-lg">
                            “Education is the strongest foundation for a better future.”
                        </blockquote>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="my-20 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: 'Established in 1996', icon: Clock },
                        { title: 'Trusted by schools & teachers', icon: ShieldCheck },
                        { title: 'Serving community for 25+ years', icon: Heart }
                    ].map((badge, idx) => (
                        <div key={idx} className="bg-white/60 backdrop-blur-sm rounded-xl p-8 border border-white/40 shadow-sm text-center transform transition-all hover:-translate-y-2 hover:shadow-md duration-300">
                            <div className="w-14 h-14 mx-auto bg-accent/20 rounded-full flex items-center justify-center text-primary mb-4">
                                <badge.icon size={28} />
                            </div>
                            <h3 className="font-heading font-semibold text-lg text-dark">{badge.title}</h3>
                        </div>
                    ))}
                </div>

                {/* Part 2 – Father (Establishment and Growth) */}
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden group">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-10 md:p-14 flex flex-col justify-center space-y-6">
                            <h2 className="text-3xl font-heading text-primary">Building a Trusted Bookstore Since 1996</h2>
                            <div className="space-y-4 text-gray-700 font-body leading-relaxed text-lg">
                                <p>
                                    In 1996, this vision was carried forward with the founding of Saini Pustak Bhandar. What began as a small bookshop with a simple mission—to make quality educational materials accessible to every student—has grown into a trusted learning partner for the community.
                                </p>
                                <p>
                                    Over the decades, we have proudly served generations of families. Many students who bought their first school books from us now return to purchase books for their own children.
                                </p>
                                <p>
                                    We believe in honest pricing, genuine products, and building long-term relationships with schools, teachers, parents, and students.
                                </p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden min-h-[400px] h-full lg:order-last order-first">
                            <img
                                src="/images/about/father.jpg"
                                alt="Our Father in the shop"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>

                {/* Part 3 – Present and Future */}
                <div className="text-center max-w-4xl mx-auto bg-accent/10 rounded-3xl p-10 md:p-16 border border-accent/20 transition-all duration-300 hover:shadow-md">
                    <h2 className="text-3xl font-heading text-primary mb-6">Continuing the Legacy for Future Generations</h2>
                    <div className="space-y-4 text-gray-700 font-body leading-relaxed text-lg max-w-2xl mx-auto">
                        <p>
                            Today, Saini Pustak Bhandar combines traditional values with modern convenience. From school books and competitive exams to stationery, printing, and document services, we continue to support students at every stage of their learning journey.
                        </p>
                        <p className="font-semibold text-primary">
                            Our goal is to make education accessible, reliable, and stress-free for every family.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};
