import Image from "next/image"

import Acc from "@/app/assets/acc.png";
import Smilex from "@/app/assets/smilex.png";
import Thumbm from "@/app/assets/thumbm.svg";

type ListItemProps = {
  value: string
}

function ListItem(props: ListItemProps) {
  return (
    <div className="relative">
      <div className="absolute left-[-16px] top-[10px] w-[10px] h-[10px] bg-primary rounded-full">

      </div>
      <p className="h5 text-[24px] leading-[28px]">{props.value}</p>
    </div>
  )
}

type HeaderItemProps = {
  value: string
}

function HeaderItem(props: HeaderItemProps) {
  return (
    <h2 className="h2 text-[32px] leading-[32px]">{props.value}</h2>
  )
}

function Section({ children }: { children: any }) {
  return (
    <div className="flex flex-col gap-[24px]">
      {children}
    </div>
  )
}

export default function Privacy() {
  return (
    <div className="bg-[#F5F5F5] mt-[70px]">
      <div className="pb-[240px] max-w-[1750px] mx-auto">
        <div>
          <div className="absolute pt-[60px] pl-[120px] max-[855px]:pl-[60px] max-[501px]:pl-[16px]">
            <p className={`
              text-[300px] font-[800] leading-[300px] tracking-[-19px] text-[rgba(255,_255,_255,_50%)]
              max-[1240px]:text-[200px] max-[1240px]:leading-[200px]
              max-[800px]:text-[20vw] max-[800px]:leading-[20vw] max-[800px]:tracking-[0] privacy-header
              `}>
              PRIVACY
            </p>
            <p className={`
              text-[300px] font-[800] leading-[300px] tracking-[-19px] text-[rgba(255,_255,_255,_50%)]
              max-[1240px]:text-[200px] max-[1240px]:leading-[200px]
              max-[800px]:text-[20vw] max-[800px]:leading-[20vw] max-[800px]:tracking-[0] privacy-header
              `}>
              POLICY
            </p>
          </div>
        </div>
        <div className={`
            flex justify-between relative z-[1]
            max-[1000px]:flex-col
          `}>
          <div className={`
              pt-[170px] ml-[140px] max-[800px]:pl-[32px]
              max-[1000px]:pt-[100px]
              max-[1040px]:ml-[32px]
              max-[501px]:ml-[16px]
            `}>
            <div className="sticky top-[152px]">
              <div>
                <p className={`
                    text-[100px] font-[800] leading-[100px] tracking-[-6px] text-secondary relative z-[2]
                    max-[800px]:text-[15vw] max-[800px]:leading-[15vw] privacy-header
                  `}>
                  <Image src={Acc} alt="acc" className="absolute left-[-40px] top-[-50px]" />
                  PRIVACY<br />
                </p>
                <p className={`
                    text-[100px] font-[800] leading-[100px] tracking-[-6px] text-secondary inline relative z-[1]
                    max-[800px]:text-[15vw] max-[800px]:leading-[15vw] privacy-header
                  `}>
                  POLICY
                  <Image src={Smilex} alt="smile x" className="absolute right-[-150px] bottom-[-50px] z-[-1] max-[700px]:w-[50%] max-[500px]:right-[-80px] max-[500px]:bottom-[0px] unzoom" />
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-[898px] pr-[150px] pl-[63px] flex flex-col gap-[105px] pt-[176px] max-[1000px]:mr-[16px] max-[1000px]:ml-[16px] max-[1000px]:pl-[0] max-[1000px]:pt-[64px] relative z-[1] max-[1250px]:pr-[0px]">
            <Section>
              <div>
                <h5 className="h5 text-[24px] leading-[28px]">At TheCollege, your privacy matters. We are committed to protecting your personal information
                  and being transparent about how we handle it. This Privacy Policy explains how we collect, use,
                  and safeguard your data when you visit our website, join our waitlist, or use our services.
                </h5>
              </div>
              <div>
                <h5 className="h5 text-[24px] leading-[28px]">By signing up or using our website, you agree to the practices described in this policy.
                </h5>
              </div>
            </Section>
            <Section>
              <div>
                <h2 className="h2">Information We Collect</h2>
              </div>
              <div>
                <h5 className="h5 text-[24px] leading-[28px]">We only collect the information necessary to provide updates and improve our services. This may include:</h5>
              </div>
              <div className="pl-[50px] flex flex-col gap-[20px]">
                <ListItem value="Personal Information: Your name and email address (when you sign up for the waitlist or updates)." />
                <ListItem value="Usage Information: Device type, browser, IP address, and interactions with our website (via cookies or analytics tools)." />
                <ListItem value="Optional Information: Details you voluntarily share (e.g., feedback, surveys)." />
              </div>
            </Section>
            <Section>
              <div>
                <HeaderItem value="How We Use Your Information" />
              </div>
              <div>
                <h5 className="h5 text-[24px] leading-[28px]">We use your information to:</h5>
              </div>
              <div className="pl-[50px] flex flex-col gap-[20px]">
                <ListItem value="Add you to our waitlist and notify you about TheCollege." />
                <ListItem value="Send relevant updates about features, launch news, and community invites." />
                <ListItem value="Improve our website, content, and overall user experience." />
                <ListItem value="Respond to your queries or support requests." />
              </div>
            </Section>
            <Section>
              <div>
                <HeaderItem value="Legal Basis for Processing" />
              </div>
              <div>
                <h5 className="h5 text-[24px] leading-[28px]">As per India's Digital Personal Data Protection Act, 2023 (DPDP Act), we process your data only:</h5>
              </div>
              <div className="pl-[50px] flex flex-col gap-[20px]">
                <ListItem value="With your consent (e.g., when you join our waitlist)." />
                <ListItem value="For legitimate business purposes (e.g., operating and securing our services)." />
              </div>
            </Section>
            <Section>
              <div>
                <HeaderItem value="Cookies & Tracking" />
              </div>
              <div className="pl-[50px] flex flex-col gap-[20px]">
                <ListItem value="We may use cookies or analytics tools (like Google Analytics) to understand visitor activity and enhance performance." />
                <ListItem value="You can disable cookies anytime in your browser settings." />
                <ListItem value="We do not use tracking for third-party advertising." />
              </div>
            </Section>
            <Section>
              <div>
                <HeaderItem value="Data Storage & Security" />
              </div>
              <div className="pl-[50px] flex flex-col gap-[20px]">
                <ListItem value="Your data is stored securely with trusted cloud service providers." />
                <ListItem value="Access is restricted to authorized team members only." />
                <ListItem value="We implement reasonable technical and organizational safeguards to prevent unauthorized access, misuse, or loss." />
              </div>
            </Section>
            <Section>
              <div>
                <HeaderItem value="Data Sharing" />
              </div>
              <div>
                <h5 className="h5 text-[24px] leading-[28px]">We may share your information only in limited cases:</h5>
              </div>
              <div className="pl-[50px] flex flex-col gap-[20px]">
                <ListItem value="Service Providers: With trusted vendors for email, hosting, or analytics." />
                <ListItem value="Legal Requirements: If required by law, regulation, or court order." />
              </div>
              <div>
                <h5 className="h5 text-[24px] leading-[28px]">We never share your personal data for advertising or marketing purposes.</h5>
              </div>
            </Section>
            <Section>
              <div>
                <HeaderItem value="Your Rights" />
              </div>
              <div>
                <h5 className="h5 relative text-[24px] leading-[28px]">Under the DPDP Act, 2023, you have the right to: <Image src={Thumbm} alt="smile x" className="absolute right-[0px] bottom-[40px] z-[-1]" /></h5>
              </div>
              <div className="pl-[50px] flex flex-col gap-[20px]">
                <ListItem value="Access the personal data you shared with us." />
                <ListItem value="Request correction or deletion of your data." />
                <ListItem value="Withdraw consent at any time (via the unsubscribe link in emails)." />
                <ListItem value="File a grievance if you believe your data has been misused." />
              </div>
              <div>
                <h5 className="h5 text-[24px] leading-[28px]">To exercise your rights, email us at: <a
                  href="mailto:ask@thecollege.co.in"
                  className="pb-1 border-b-4 border-mint-500 text-mint-500 hover:text-primary hover:border-primary">
                  ask@thecollege.co.in
                </a></h5>
              </div>
            </Section>
            <Section>
              <div>
                <HeaderItem value="Children's Privacy" />
              </div>
              <div>
                <h5 className="h5 text-[24px] leading-[28px]">
                  Our services are intended for individuals aged 18 and above. We do not knowingly collect information from minors.
                  If such data is discovered, we will delete it immediately.
                </h5>
              </div>
            </Section>
            <Section>
              <div>
                <HeaderItem value="Changes to this Policy" />
              </div>
              <div>
                <h5 className="h5 text-[24px] leading-[28px]">
                  We may update this Privacy Policy periodically. If changes are significant, we will notify you through email or a notice on our website.
                </h5>
              </div>
            </Section>
            <Section>
              <div>
                <HeaderItem value="Contact Us" />
              </div>
              <div>
                <h5 className="h5 text-[24px] leading-[28px]">If you have questions, concerns, or requests regarding your data, please contact us: <a
                  href="mailto:ask@thecollege.co.in"
                  className="pb-1 border-b-4 border-mint-500 text-mint-500 hover:text-primary hover:border-primary">
                  ask@thecollege.co.in
                </a></h5>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  )
}