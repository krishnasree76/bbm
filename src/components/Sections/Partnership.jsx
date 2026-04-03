import { useState } from "react";

export default function Partnership() {
    const [isDealership, setIsDealership] = useState(true);
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const phoneNumber = "917013366819";

        // Constructing the message based on the form type
        let message = isDealership
            ? `*New Dealership Inquiry*%0A`
            : `*New Bike Rental Inquiry*%0A`;

        Object.entries(formData).forEach(([key, value]) => {
            message += `*${key.replace(/([A-Z])/g, ' $1').toUpperCase()}:* ${value}%0A`;
        });

        window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    };

    return (
        <div className="min-h-screen bg-[#0B0B0B] text-white pt-28 pb-12 px-6">
            <div className="max-w-3xl mx-auto bg-[#111] p-8 rounded-2xl border border-gray-800 shadow-2xl">
                <h2 className="text-3xl font-bold text-center mb-8 text-blue-500">Partner With Us</h2>

                {/* Toggle Switch */}
                <div className="flex justify-center mb-10">
                    <div className="bg-gray-800 p-1 rounded-full flex w-72">
                        <button
                            onClick={() => { setIsDealership(true); setFormData({}); }}
                            className={`flex-1 py-2 rounded-full transition-all ${isDealership ? "bg-blue-600 text-white" : "text-gray-400"}`}
                        >
                            Dealership
                        </button>
                        <button
                            onClick={() => { setIsDealership(false); setFormData({}); }}
                            className={`flex-1 py-2 rounded-full transition-all ${!isDealership ? "bg-blue-600 text-white" : "text-gray-400"}`}
                        >
                            Rentals
                        </button>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Common Fields */}
                    <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required className="input-style" />
                    <input type="text" name="fatherName" placeholder="Father's Name" onChange={handleChange} required className="input-style" />
                    <input type="number" name="age" placeholder="Age" onChange={handleChange} required className="input-style" />
                    <input type="email" name="email" placeholder="Mail ID" onChange={handleChange} required className="input-style" />
                    <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required className="input-style" />
                    <input type="text" name="address" placeholder="Address" onChange={handleChange} required className="input-style col-span-full" />

                    {/* Conditional Fields */}
                    {isDealership ? (
                        <>
                            <input type="text" name="targetPlace" placeholder="Place of Dealership" onChange={handleChange} required className="input-style" />
                            <select name="budget" onChange={handleChange} required className="input-style">
                                <option value="">Select Budget Range</option>
                                <option value="5-10L">5L - 10L</option>
                                <option value="10-20L">10L - 20L</option>
                                <option value="20L+">20L+</option>
                            </select>
                            <select name="placeStatus" onChange={handleChange} required className="input-style col-span-full">
                                <option value="">Place Status (Rented/Own)</option>
                                <option value="Rented">Rented</option>
                                <option value="Own">Own</option>
                            </select>
                        </>
                    ) : (
                        <>
                            <input type="text" name="idProof" placeholder="ID Proof (Aadhar/License)" onChange={handleChange} required className="input-style" />
                            <select name="duration" onChange={handleChange} required className="input-style">
                                <option value="">Rent Duration</option>
                                <option value="Daily">Daily</option>
                                <option value="Weekly">Weekly</option>
                                <option value="Monthly">Monthly</option>
                            </select>
                        </>
                    )}

                    <button type="submit" className="col-span-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors mt-4">
                        Submit to WhatsApp
                    </button>
                </form>
            </div>

            <style jsx>{`
        .input-style {
          background: #1a1a1a;
          border: 1px solid #333;
          padding: 12px;
          border-radius: 8px;
          outline: none;
          transition: border 0.3s;
        }
        .input-style:focus {
          border-color: #3b82f6;
        }
      `}</style>
        </div>
    );
}