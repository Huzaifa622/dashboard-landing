import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-2xl mx-auto md:w-[80%] ">
        <div className=" items-center w-full">
          <div className="py-6">
            <div className="flex flex-wrap justify-between gap-6 items-center border-b pb-8 p-3">
              <div>
                <h1 className="font-bold">
                  Have questions? Call 1-888-858-2546 or email sales@EVS.com
                </h1>
                <h4 className="text-sm">
                  Our sales team is available Monday to Friday from 8 a.m. to 8
                  p.m. EST.
                </h4>
              </div>
              <div className="flex gap-2">
                <Facebook />
                <Twitter />
                <Instagram />
                <Youtube />
                <Linkedin />
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:justify-between p-8">
              <div className="">
                <h4 className="font-bold mb-2 text-center">Products</h4>
                <ul className="flex flex-col gap-4 items-center text-xs opacity-80">
                  <li>EVS Complete</li>
                  <li>EVS Manage</li>
                  <li>EVS Grow</li>
                  <li>EVS Accounting</li>
                  <li>EVS for Clients</li>
                  <li>EVS Draft</li>
                  <li>Integrations</li>
                </ul>
              </div>
              <div className="">
                <h4 className="font-bold mb-2 text-center">Features</h4>
                <ul className="flex flex-col gap-4 items-center text-xs opacity-80">
                  <li>Client Intake</li>
                  <li>Billing & Collections</li>
                  <li>Case Management</li>
                  <li>Document Management</li>
                  <li>Task Management</li>
                  <li>What’s New</li>
                  <li>See All Features</li>
                </ul>
              </div>
              <div className="">
                <h4 className="font-bold mb-2 text-center">
                  Resources & Events
                </h4>
                <ul className="flex flex-col gap-4 items-center text-xs opacity-80">
                  <li>All Upcoming Events</li>
                  <li>Customer Stories</li>
                  <li>EVS Cloud Conference</li>
                  <li>Legal Trends Report</li>
                  <li>EVS for Clients</li>
                  <li>The Legal Insider Magazine</li>
                  <li>Compare EVS</li>
                  <li>Blog</li>
                  <li>EVS Reviews</li>
                </ul>
              </div>
              <div className="">
                <h4 className="font-bold mb-2 text-center">Community</h4>
                <ul className="flex flex-col gap-4 items-center text-xs opacity-80">
                  <li>Customer Community</li>
                  <li>Bar Associations</li>
                  <li>Incubator Program</li>
                  <li>Referrals</li>
                  <li>Academic Access</li>
                  <li>Channel Partner Program</li>
                </ul>
              </div>
              <div className="">
                <h4 className="font-bold mb-2 text-center">Support</h4>
                <ul className="flex flex-col gap-4 items-center text-xs opacity-80">
                  <li>Help Center</li>
                  <li>Data Migration</li>
                  <li>Developer Hub </li>
                  <li>Find a Consultant</li>
                  <li>Compare EVS</li>
                  <li>Sitemap</li>
                  <li>Subscribe</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
            <div className="py-12 flex justify-center">
              <div>
                <h1 className="uppercase text-xl text-center font-bold">
                  Transforming the legal experience for all
                </h1>
                <div className="flex md:flex-row flex-col gap-2 text-xs items-center md:justify-between px-10 p-2 opacity-70">
                  <h4>About Us</h4>
                  <h4>Our Mission</h4>
                  <h4>Leadership</h4>
                  <h4>Careers</h4>
                  <h4>News & Press</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="bg-accent ">
          <div className="max-w-screen-2xl mx-auto md:w-[80%] opacity-70 py-8">
          <div className="flex flex-wrap text-xs gap-4 md:gap-8 justify-center py-4 md:px-10 p-2 ">
                  <h4>Terms of Service</h4>
                  <h4>Legal Service</h4>
                  <h4>Trust Centre</h4>
                  <h4>Privacy Policy</h4>
                  <h4>Cookies</h4>
                  <h4>GDPR</h4>
                  <h4>Accessibility</h4>
                  <h4>AI Principles</h4>
                  <h4>Region</h4>
                </div>
                <div className="text-xs text-center" >
                &copy;2008 - 2025 Themis Solutions Inc. (EVS) | 300 - 4611 Canada Way, Burnaby, BC V5G 4X3
                </div>
          </div>
        </div>
    </div>
  );
}

export default Footer;
