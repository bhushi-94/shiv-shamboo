import Header from "./Header";
import HeroImage from "./HeroImage";
import FooterSr from "./FooterSr";

function ActivityServices() {
  return (
    <div>
      <div className="pt-16 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
          उपक्रम व सेवा
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          <b>धार्मिक उत्सव</b>
          <ul>
            <li>* महाशिवरात्री निमित्त विशेष धार्मिक कार्यक्रमांचे आयोजन</li>
            <li>* होळी उत्सव</li>
            <li>* रामनवमी उत्सव</li>
            <li>* श्रावण मास उत्सव</li>
            <li>* दहीहंडी (दहीकाला)</li>
            <li>* नवरात्रोत्सव उत्सव</li>
            <li>* शिवपुराण</li>
          </ul>
          <br />
          <b>सेवा उपक्रम</b>
          <br /> महाप्रसाद सेवेचे आयोजन सामाजिक व सांस्कृतिक उपक्रम <br />
          <ul>
            <li>* सामाजिक उपक्रमांचे आयोजन</li>
            <li>* सांस्कृतिक व आध्यात्मिक कार्यक्रम</li>
            <li>* बालसंस्कार व धार्मिक शिक्षण उपक्रम</li>
            <li>
              * मुलांसाठी, महिलांसाठी व प्रौढांसाठी सर्व स्तरांवर विविध
              खेळांच्या स्पर्धांचे आयोजन
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default ActivityServices;
