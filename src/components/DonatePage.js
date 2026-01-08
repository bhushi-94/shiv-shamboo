import Header from "./Header";
import HeroImage from "./HeroImage";
import FooterSr from "./FooterSr";
import QRCodeImg from "../images/sample.jpg";

function DonatePage() {
  return (
    <div>
      <Header />
      <HeroImage />
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* INTRO TEXT */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            Support Our Sacred Cause
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Your contribution helps us preserve spiritual heritage, support
            community service, and carry forward divine traditions. Every
            donation is valuable and deeply appreciated.
            <br />
            <br />
            श्री शिव शंभो चॅरिटेबल ट्रस्ट (श्री शिव शंभो महादेव मंदिर) यांच्या
            धार्मिक व सामाजिक उपक्रमांसाठी आपली देणगी अत्यंत मोलाची ठरते. आपल्या
            जनगीतून मंदिर विकास, अन्नदान, विविध धार्मिक कार्यक्रम तसेच
            समाजसेवेचे उपक्रम प्रभावीपणे राबवले जातात.
          </p>
        </div>

        {/* DONATION DETAILS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* LEFT – RTGS DETAILS */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">
              Bank Transfer (RTGS / NEFT)
            </h2>

            <ul className="space-y-3 text-gray-800">
              <li>
                <strong>Account Name:</strong> Shri Mahadev Seva Trust
              </li>
              <li>
                <strong>Bank Name:</strong> Saraswat Bank
              </li>
              <li>
                <strong>Account Number:</strong> 069200124017602
              </li>
              <li>
                <strong>IFSC Code:</strong> SRCB0000069
              </li>
              <li>
                <strong>Branch:</strong> Charkop
              </li>
              <li>
                <strong>Account Type:</strong> Current
              </li>
            </ul>

            <p className="mt-4 text-sm text-gray-600">
              After transferring, please share the transaction reference number
              with us for confirmation.
            </p>
          </div>

          {/* RIGHT – QR SCANNER */}
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <h2 className="text-xl font-semibold mb-4">Scan & Pay (UPI)</h2>

            <img
              src={QRCodeImg}
              alt="UPI QR Code"
              className="mx-auto w-64 h-64 object-contain"
            />

            <p className="mt-4 text-sm text-gray-600">
              You can scan this QR code using any UPI app such as Google Pay,
              PhonePe, or Paytm.
            </p>
          </div>
        </div>
        <div>सर्वजण यांची योग्य पावती पारदर्शक नोंद ठेवली जाते</div>
      </div>
      <FooterSr />
    </div>
  );
}

export default DonatePage;
