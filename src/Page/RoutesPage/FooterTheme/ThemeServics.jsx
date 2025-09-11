import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default function ThemeServics() {
    return (
        <div className="bg-black pt-10 min-h-screen text-white font-sans">
           

            <div className="bg-[#FFBA00] pt-10 py-10 text-center">
                <h1 className="text-4xl md:text-6xl font-bold uppercase">
                    Terms & Conditions
                </h1>
                <p className="text-black font-semibold mt-2 text-lg">
                    Welcome to Kawsar.Restaurent
                </p>
            </div>

           
            <div className="max-w-5xl mx-auto px-5 md:px-20 py-10 space-y-8">
                <p className="text-gray-300 text-lg leading-relaxed">
                    At <span className="text-yellow-400 font-bold">Kawsar.Restaurent</span>, we strive to provide our customers with high-quality food and excellent service. By using our website and services, you agree to the following terms and conditions. Please read them carefully before making any orders or engaging with our platform.
                </p>

                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 mt-1"/>
                        <p className="text-gray-300">
                            All orders are subject to acceptance and availability. We reserve the right to refuse service or cancel orders at our discretion.
                        </p>
                    </div>

                    <div className="flex items-start gap-4">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 mt-1"/>
                        <p className="text-gray-300">
                            Prices, menu items, and availability may change without prior notice. Special offers and discounts are subject to terms specified in each promotion.
                        </p>
                    </div>

                    <div className="flex items-start gap-4">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 mt-1"/>
                        <p className="text-gray-300">
                            Customers are responsible for providing accurate information for orders, including delivery address and contact details.
                        </p>
                    </div>

                    <div className="flex items-start gap-4">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 mt-1"/>
                        <p className="text-gray-300">
                            By using Kawsar.Restaurent services, you agree not to misuse our platform or engage in any fraudulent activities.
                        </p>
                    </div>

                    <div className="flex items-start gap-4">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 mt-1"/>
                        <p className="text-gray-300">
                            We are not liable for delays due to unforeseen circumstances such as traffic, weather, or technical issues. We aim to provide timely service but cannot guarantee exact delivery times.
                        </p>
                    </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mt-5">
                    By using our website and services, you acknowledge that you have read, understood, and agreed to these terms and conditions. For any queries or clarifications, please contact our support team. Thank you for choosing <span className="text-yellow-400 font-bold">Kawsar.Restaurent</span>.
                </p>
            </div>

          
           
        </div>
    )
}
