import React from "react";

const FAQ = () => {
  return (
    <div className="py-16 space-y-4">
      {/* FAQ 1 */}
      <div className="collapse collapse-arrow border border-base-300 bg-base-100">
        <input
          type="radio"
          name="my-accordion-2"
          defaultChecked
          className="peer"
        />

        <div className="collapse-title border-none font-semibold border peer-checked:bg-[#E6F2F3] border-none peer-checked:border-[#03373D]">
          How do I create an account?
        </div>

        <div className="collapse-content  border-none text-sm border peer-checked:bg-[#E6F2F3] border-none peer-checked:border-[#03373D]">
          Click the "Sign Up" button in the top right corner and follow the
          registration process.
        </div>
      </div>

      {/* FAQ 2 */}
      <div className="collapse collapse-arrow border border-base-300 bg-base-100">
        <input type="radio" name="my-accordion-2" className="peer" />

        <div className="collapse-title font-semibold border peer-checked:bg-[#E6F2F3] border-none peer-checked:border-[#03373D]">
          I forgot my password. What should I do?
        </div>

        <div className="collapse-content text-sm border peer-checked:bg-[#E6F2F3] border-none peer-checked:border-[#03373D]">
          Click on "Forgot Password" on the login page and follow the
          instructions sent to your email.
        </div>
      </div>

      {/* FAQ 3 */}
      <div className="collapse collapse-arrow border border-base-300 bg-base-100">
        <input type="radio" name="my-accordion-2" className="peer" />

        <div className="collapse-title font-semibold border peer-checked:bg-[#E6F2F3] border-none peer-checked:border-[#03373D]">
          How do I update my profile information?
        </div>

        <div className="collapse-content text-sm border peer-checked:bg-[#E6F2F3] border-none peer-checked:border-[#03373D]">
          Go to "My Account" settings and select "Edit Profile" to make changes.
        </div>
      </div>
    </div>
  );
};

export default FAQ;
