import clsx from "clsx";
import svgPaths from "./svg-amnh553owh";
import { imgGroup, imgGroup1, imgGroup2, imgGroup3 } from "./svg-0nug8";
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">{children}</div>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className={clsx("flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-center whitespace-nowrap", additionalClassNames)}>
      <p className="leading-[1.45]">{children}</p>
    </div>
  );
}

function Frame129Input({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative w-full">{children}</div>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        {children}
      </svg>
    </div>
  );
}

function Frame131ButtonSecondary({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[100px]">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[24px] py-[16px] relative w-full">{children}</div>
      </div>
      <div aria-hidden="true" className="absolute border-[#377749] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function InputFrame({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white h-[56px] relative rounded-[100px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">{children}</div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}
type LogoGroupProps = {
  additionalClassNames?: string;
};

function LogoGroup({ children, additionalClassNames = "" }: React.PropsWithChildren<LogoGroupProps>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8028 14.4286">
        <g id="Group">{children}</g>
      </svg>
    </div>
  );
}
type Frame1Helper1Props = {
  additionalClassNames?: string;
};

function Frame1Helper1({ additionalClassNames = "" }: Frame1Helper1Props) {
  return (
    <div className={clsx("absolute size-[35px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <circle cx="17.5" cy="17.5" fill="var(--fill-0, #3C8350)" fillOpacity="0.63" id="Ellipse 2" r="17.5" />
      </svg>
    </div>
  );
}
type Frame1HelperProps = {
  additionalClassNames?: string;
};

function Frame1Helper({ additionalClassNames = "" }: Frame1HelperProps) {
  return (
    <div className={clsx("absolute size-[25px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <circle cx="12.5" cy="12.5" fill="var(--fill-0, #3C8350)" fillOpacity="0.35" id="Ellipse 1" r="12.5" />
      </svg>
    </div>
  );
}
type LogoProps = {
  className?: string;
  state?: "White" | "Black" | "Icon White" | "Icon Black";
};

function Logo({ className, state = "White" }: LogoProps) {
  const isBlack = state === "Black";
  const isBlackOrIconBlack = ["Black", "Icon Black"].includes(state);
  const isIconWhiteOrIconBlack = ["Icon White", "Icon Black"].includes(state);
  const isWhiteOrBlack = ["White", "Black"].includes(state);
  return (
    <div className={className || `h-[42px] relative ${isIconWhiteOrIconBlack ? "w-[29px]" : "w-[140px]"}`}>
      {isWhiteOrBlack && (
        <>
          <div className="absolute contents inset-[28.15%_62.66%_29.57%_31.24%]" data-name="Group">
            <div className="absolute contents inset-[28.15%_62.66%_29.57%_31.24%]" data-name="Group">
              <div className="absolute inset-[28.15%_62.66%_29.57%_31.24%]" data-name="Group">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.53588 17.7602">
                  <g id="Group">
                    <path d={svgPaths.p1a289e80} fill={isBlack ? "var(--fill-0, #040404)" : "var(--fill-0, white)"} id="Vector" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute contents inset-[36.62%_53.29%_29.02%_36.99%]" data-name="Group">
            <div className="absolute contents inset-[36.62%_53.29%_29.02%_36.99%]" data-name="Group">
              <div className="absolute inset-[36.62%_53.29%_29.02%_36.99%]" data-name="Group">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.6017 14.4286">
                  <g id="Group">
                    <path d={svgPaths.p37f52800} fill={isBlack ? "var(--fill-0, #040404)" : "var(--fill-0, white)"} id="Vector" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute contents inset-[37.17%_45.52%_29.57%_46.23%]" data-name="Group">
            <div className="absolute contents inset-[37.17%_45.52%_29.57%_46.23%]" data-name="Group">
              <div className="absolute inset-[37.17%_45.52%_29.57%_46.23%]" data-name="Group">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.55 13.9726">
                  <g id="Group">
                    <path d={svgPaths.p1147c0c0} fill={isBlack ? "var(--fill-0, #040404)" : "var(--fill-0, white)"} id="Vector" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute contents inset-[24.26%_43.43%_29.57%_54.35%]" data-name="Group">
            <div className="absolute contents inset-[24.26%_43.43%_29.57%_54.35%]" data-name="Group">
              <div className="absolute inset-[24.26%_43.43%_29.57%_54.35%]" data-name="Group">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.1028 19.3944">
                  <g id="Group">
                    <path d={svgPaths.p2e544800} fill={isBlack ? "var(--fill-0, #040404)" : "var(--fill-0, white)"} id="Vector" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute contents inset-[28.39%_32.13%_29.57%_56.8%]" data-name="Group">
            <div className="absolute contents inset-[28.39%_32.13%_29.57%_56.8%]" data-name="Group">
              <div className="absolute inset-[28.39%_32.13%_29.57%_56.8%]" data-name="Group">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5014 17.6589">
                  <g id="Group">
                    <path d={svgPaths.p127c2b00} fill={isBlack ? "var(--fill-0, #040404)" : "var(--fill-0, white)"} id="Vector" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute contents inset-[36.62%_24.45%_29.02%_67.83%]" data-name="Group">
            <div className="absolute contents inset-[36.62%_24.45%_29.02%_67.83%]" data-name="Group">
              <LogoGroup additionalClassNames="inset-[36.62%_24.45%_29.02%_67.83%]">
                <path d={svgPaths.p306408f0} fill={isBlack ? "var(--fill-0, #040404)" : "var(--fill-0, white)"} id="Vector" />
              </LogoGroup>
            </div>
          </div>
          <div className="absolute contents inset-[36.62%_16.44%_29.02%_75.84%]" data-name="Group">
            <div className="absolute contents inset-[36.62%_16.44%_29.02%_75.84%]" data-name="Group">
              <LogoGroup additionalClassNames="inset-[36.62%_16.44%_29.02%_75.84%]">
                <path d={svgPaths.p5a49580} fill={isBlack ? "var(--fill-0, #040404)" : "var(--fill-0, white)"} id="Vector" />
              </LogoGroup>
            </div>
          </div>
          <div className="absolute contents inset-[24.26%_13.67%_29.57%_84.12%]" data-name="Group">
            <div className="absolute contents inset-[24.26%_13.67%_29.57%_84.12%]" data-name="Group">
              <div className="absolute inset-[24.26%_13.67%_29.57%_84.12%]" data-name="Group">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.10281 19.3944">
                  <g id="Group">
                    <path d={svgPaths.p2ecd9500} fill={isBlack ? "var(--fill-0, #040404)" : "var(--fill-0, white)"} id="Vector" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute contents inset-[36.62%_5.45%_29.02%_86.83%]" data-name="Group">
            <div className="absolute contents inset-[36.62%_5.45%_29.02%_86.83%]" data-name="Group">
              <LogoGroup additionalClassNames="inset-[36.62%_5.45%_29.02%_86.83%]">
                <path d={svgPaths.p115c4400} fill={isBlack ? "var(--fill-0, #040404)" : "var(--fill-0, white)"} id="Vector" />
              </LogoGroup>
            </div>
          </div>
          <div className="absolute contents inset-[28.81%_0_29.57%_94.45%]" data-name="Group">
            <div className="absolute contents inset-[28.81%_0_29.57%_94.45%]" data-name="Group">
              <div className="absolute inset-[28.81%_0_29.57%_94.45%]" data-name="Group">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.77602 17.4815">
                  <g id="Group">
                    <path d={svgPaths.p28a91900} fill={isBlack ? "var(--fill-0, #040404)" : "var(--fill-0, white)"} id="Vector" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </>
      )}
      <div className={`absolute contents ${isIconWhiteOrIconBlack ? "inset-[0_10.33%_29.06%_25.38%]" : "inset-[0_81.43%_29.06%_5.26%]"}`} data-name="Clip path group">
        <div className={`absolute mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.6px_-0.001px] mask-size-[18.642px_29.795px] ${isIconWhiteOrIconBlack ? "inset-[0_10.5%_28.36%_27.45%]" : "inset-[0_81.46%_28.36%_5.69%]"}`} data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9942 30.0896">
            <g id="Group">
              <path clipRule="evenodd" d={svgPaths.p23bc8a80} fill={isBlackOrIconBlack ? "var(--fill-0, #040404)" : "var(--fill-0, white)"} fillRule="evenodd" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
      <div className={`absolute contents ${isIconWhiteOrIconBlack ? "inset-[0_13.13%_65.04%_30.97%]" : "inset-[0_82.01%_65.04%_6.42%]"}`} data-name="Clip path group">
        <div className={`absolute contents ${isIconWhiteOrIconBlack ? "inset-[0_10.5%_28.36%_27.45%]" : "inset-[0_81.46%_28.36%_5.69%]"}`} data-name="Group">
          <div className={`absolute contents ${isIconWhiteOrIconBlack ? "inset-[0_10.5%_28.36%_27.45%]" : "inset-[0_81.46%_28.36%_5.69%]"}`} data-name="Clip path group">
            <div className={`absolute mask-position-[-0.707px_-0.001px,_-1.728px_0px] ${isIconWhiteOrIconBlack ? "inset-[0_15.57%_65.78%_33.41%]" : "inset-[0_82.51%_65.78%_6.92%]"}`} data-name="Group" style={{ maskImage: `url('${imgGroup1}'), url('${imgGroup2}')` }}>
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.7964 14.3702">
                <g id="Group">
                  <path clipRule="evenodd" d={svgPaths.p15c5080} fill={isBlackOrIconBlack ? "var(--fill-0, #040404)" : "var(--fill-0, white)"} fillRule="evenodd" id="Vector" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className={`absolute contents ${isIconWhiteOrIconBlack ? "inset-[60.91%_-0.62%_0_0]" : "inset-[60.91%_79.16%_0_0]"}`} data-name="Clip path group">
        <div className={`absolute mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-0.013px] mask-size-[29.179px_16.417px] ${isIconWhiteOrIconBlack ? "inset-[60.94%_-1.63%_0.5%_0]" : "inset-[60.94%_78.95%_0.5%_0]"}`} data-name="Group" style={{ maskImage: `url('${imgGroup3}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.4735 16.1958">
            <g id="Group">
              <path d={svgPaths.p329f300} fill={isBlackOrIconBlack ? "var(--fill-0, #040404)" : "var(--fill-0, white)"} id="Vector" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function SignInPage() {
  return (
    <div className="bg-white relative size-full" data-name="Sign In Page">
      <div className="absolute h-[1024px] left-0 top-0 w-[720px]">
        <div className="absolute bg-[#ecf3ee] h-[1117px] left-[-19px] overflow-clip top-[-49px] w-[768px]">
          <Frame1Helper additionalClassNames="left-[233px] top-[916px]" />
          <Frame1Helper additionalClassNames="left-[717px] top-[478px]" />
          <Frame1Helper1 additionalClassNames="left-[384px] top-[881px]" />
          <Frame1Helper additionalClassNames="left-[71px] top-[317px]" />
          <Frame1Helper1 additionalClassNames="left-[216px] top-[237px]" />
          <Frame1Helper1 additionalClassNames="left-[682px] top-[680px]" />
          <div className="absolute contents inset-[26.59%_15.49%_28.54%_15.49%]" data-name="hello/cuate">
            <Wrapper additionalClassNames="inset-[26.59%_15.49%_30.31%_15.49%]">
              <g id="background-complete" opacity="0">
                <path d={svgPaths.p2be9f970} fill="var(--fill-0, #DBDBDB)" id="Vector" />
                <path d={svgPaths.p3636cb00} fill="var(--fill-0, #EBEBEB)" id="Vector_2" />
                <path d={svgPaths.p2468ab80} fill="var(--fill-0, #DBDBDB)" id="Vector_3" />
                <path d={svgPaths.p248c7a80} fill="var(--fill-0, #EBEBEB)" id="Vector_4" />
                <path d={svgPaths.p2b88c400} fill="var(--fill-0, #EBEBEB)" id="Vector_5" />
                <path d={svgPaths.p310a8780} fill="var(--fill-0, #DBDBDB)" id="Vector_6" />
                <path d={svgPaths.p1efb580} fill="var(--fill-0, #EBEBEB)" id="Vector_7" />
                <path d={svgPaths.p1b452d80} fill="var(--fill-0, #EBEBEB)" id="Vector_8" />
                <path d={svgPaths.p2c378400} fill="var(--fill-0, #EBEBEB)" id="Vector_9" />
                <path d={svgPaths.p20a91680} fill="var(--fill-0, #EBEBEB)" id="Vector_10" />
                <path d={svgPaths.p3bafcd00} fill="var(--fill-0, #DBDBDB)" id="Vector_11" />
                <path d={svgPaths.p2678c400} fill="var(--fill-0, #EBEBEB)" id="Vector_12" />
                <path d={svgPaths.p590e7f0} fill="var(--fill-0, #EBEBEB)" id="Vector_13" />
                <path d={svgPaths.p185d400} fill="var(--fill-0, #EBEBEB)" id="Vector_14" />
                <path d={svgPaths.p9596770} fill="var(--fill-0, #EBEBEB)" id="Vector_15" />
                <path d={svgPaths.p31dc3900} fill="var(--fill-0, #EBEBEB)" id="Vector_16" />
                <path d={svgPaths.p9d24100} fill="var(--fill-0, #DBDBDB)" id="Vector_17" />
                <path d={svgPaths.p3cb1c040} fill="var(--fill-0, #DBDBDB)" id="Vector_18" />
                <path d={svgPaths.p38bec080} fill="var(--fill-0, #EBEBEB)" id="Vector_19" />
                <path d={svgPaths.p26654900} fill="var(--fill-0, #DBDBDB)" id="Vector_20" />
                <path d={svgPaths.p2412aa80} fill="var(--fill-0, #DBDBDB)" id="Vector_21" />
                <path d={svgPaths.p1e8a4780} fill="var(--fill-0, #EBEBEB)" id="Vector_22" />
                <path d={svgPaths.p36332b80} fill="var(--fill-0, #EBEBEB)" id="Vector_23" />
                <path d={svgPaths.p3eea000} fill="var(--fill-0, #EBEBEB)" id="Vector_24" />
                <path d={svgPaths.p75c6b80} fill="var(--fill-0, #EBEBEB)" id="Vector_25" />
                <path d={svgPaths.p3d8288f0} fill="var(--fill-0, #EBEBEB)" id="Vector_26" />
                <path d={svgPaths.p2788cc00} fill="var(--fill-0, #EBEBEB)" id="Vector_27" />
                <path d={svgPaths.p3b703df0} fill="var(--fill-0, #DBDBDB)" id="Vector_28" />
                <path d={svgPaths.p2115a280} fill="var(--fill-0, #DBDBDB)" id="Vector_29" />
                <path d={svgPaths.p24dd9900} fill="var(--fill-0, #DBDBDB)" id="Vector_30" />
                <path d={svgPaths.p3810d4e2} fill="var(--fill-0, #DBDBDB)" id="Vector_31" />
                <path d={svgPaths.p2aeed080} fill="var(--fill-0, #DBDBDB)" id="Vector_32" />
                <path d={svgPaths.p1380b080} fill="var(--fill-0, #EBEBEB)" id="Vector_33" />
                <path d={svgPaths.pac0fe80} fill="var(--fill-0, #EBEBEB)" id="Vector_34" />
                <path d={svgPaths.p13305c00} fill="var(--fill-0, #EBEBEB)" id="Vector_35" />
                <path d={svgPaths.p30bb4900} fill="var(--fill-0, #EBEBEB)" id="Vector_36" />
                <path d={svgPaths.p3a091580} fill="var(--fill-0, #EBEBEB)" id="Vector_37" />
                <path d={svgPaths.p2a08d600} fill="var(--fill-0, #EBEBEB)" id="Vector_38" />
                <path d={svgPaths.p1df8ec80} fill="var(--fill-0, #EBEBEB)" id="Vector_39" />
                <path d={svgPaths.p8ea1f1} fill="var(--fill-0, #EBEBEB)" id="Vector_40" />
                <path d={svgPaths.pa761600} fill="var(--fill-0, #DBDBDB)" id="Vector_41" />
                <path d={svgPaths.p15700b80} fill="var(--fill-0, #DBDBDB)" id="Vector_42" />
                <path d={svgPaths.pa3f3b00} fill="var(--fill-0, #DBDBDB)" id="Vector_43" />
                <path d={svgPaths.p3a61cb00} fill="var(--fill-0, #DBDBDB)" id="Vector_44" />
                <path d={svgPaths.p361dc1c0} fill="var(--fill-0, #DBDBDB)" id="Vector_45" />
                <path d={svgPaths.p39ed2800} fill="var(--fill-0, #DBDBDB)" id="Vector_46" />
                <path d={svgPaths.p2f99dc80} fill="var(--fill-0, #DBDBDB)" id="Vector_47" />
                <path d={svgPaths.p3edc6a00} fill="var(--fill-0, #EBEBEB)" id="Vector_48" />
                <path d={svgPaths.p2aee200} fill="var(--fill-0, #EBEBEB)" id="Vector_49" />
                <path d={svgPaths.p18ed01c0} fill="var(--fill-0, #EBEBEB)" id="Vector_50" />
                <path d={svgPaths.p1461a40} fill="var(--fill-0, #EBEBEB)" id="Vector_51" />
                <path d={svgPaths.p11dc200} fill="var(--fill-0, #EBEBEB)" id="Vector_52" />
                <path d={svgPaths.pbc603c0} fill="var(--fill-0, #EBEBEB)" id="Vector_53" />
                <path d={svgPaths.p206d1080} fill="var(--fill-0, #EBEBEB)" id="Vector_54" />
                <path d={svgPaths.p3bbba800} fill="var(--fill-0, #EBEBEB)" id="Vector_55" />
                <path d={svgPaths.p2fd92730} fill="var(--fill-0, #EBEBEB)" id="Vector_56" />
                <path d={svgPaths.p11d04d00} fill="var(--fill-0, #EBEBEB)" id="Vector_57" />
                <path d={svgPaths.p8d9c580} fill="var(--fill-0, #EBEBEB)" id="Vector_58" />
                <path d={svgPaths.p13ffd880} fill="var(--fill-0, #DBDBDB)" id="Vector_59" />
                <path d={svgPaths.p36b7b680} fill="var(--fill-0, #DBDBDB)" id="Vector_60" />
                <path d={svgPaths.p2d68cc00} fill="var(--fill-0, #DBDBDB)" id="Vector_61" />
                <path d={svgPaths.p17841890} fill="var(--fill-0, #DBDBDB)" id="Vector_62" />
                <path d={svgPaths.p2e33cd00} fill="var(--fill-0, #DBDBDB)" id="Vector_63" />
              </g>
            </Wrapper>
            <Wrapper additionalClassNames="inset-[27.7%_19.8%_28.54%_19.8%]">
              <g id="background-simple" opacity="0">
                <path d={svgPaths.p14a9a200} fill="var(--fill-0, #DBDBDB)" id="Vector" />
              </g>
            </Wrapper>
            <div className="absolute inset-[31.81%_21.8%_36.77%_21.8%]" data-name="Window">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 433.133 350.93">
                <g id="Window">
                  <path d={svgPaths.p28e9d700} fill="var(--fill-0, white)" id="Vector" />
                  <path d={svgPaths.p15c40600} fill="var(--fill-0, #37474F)" id="Vector_2" />
                  <path d={svgPaths.p5aecb80} fill="var(--fill-0, #37474F)" id="Vector_3" />
                  <path d={svgPaths.p1c501300} fill="var(--fill-0, #37474F)" id="Vector_4" />
                  <path d={svgPaths.p58ca580} fill="var(--fill-0, #37474F)" id="Vector_5" />
                  <path d={svgPaths.p6d17600} fill="var(--fill-0, #37474F)" id="Vector_6" />
                  <path d={svgPaths.p15e1f980} fill="var(--fill-0, #37474F)" id="Vector_7" />
                  <path d={svgPaths.pc8395f0} fill="var(--fill-0, #37474F)" id="Vector_8" />
                  <path d={svgPaths.pbcc6d00} fill="var(--fill-0, #263238)" id="Vector_9" />
                  <path d={svgPaths.p2df29400} fill="var(--fill-0, #37474F)" id="Vector_10" />
                  <path d={svgPaths.p1bacb590} fill="var(--fill-0, #DBDBDB)" id="Vector_11" />
                  <path d={svgPaths.p1e545700} fill="var(--fill-0, #C7C7C7)" id="Vector_12" />
                  <path d={svgPaths.p1b0bb480} fill="var(--fill-0, #C7C7C7)" id="Vector_13" />
                  <path d={svgPaths.p511c400} fill="var(--fill-0, #C7C7C7)" id="Vector_14" />
                  <path d={svgPaths.p1b758580} fill="var(--fill-0, #C7C7C7)" id="Vector_15" />
                  <path d={svgPaths.p371c4f00} fill="var(--fill-0, #C7C7C7)" id="Vector_16" />
                  <path d={svgPaths.p797a700} fill="var(--fill-0, #C7C7C7)" id="Vector_17" />
                  <path d={svgPaths.p2d940e00} fill="var(--fill-0, #C7C7C7)" id="Vector_18" />
                  <path d={svgPaths.pcfa0180} fill="var(--fill-0, #C7C7C7)" id="Vector_19" />
                  <path d={svgPaths.p3ce32480} fill="var(--fill-0, #C7C7C7)" id="Vector_20" />
                  <path d={svgPaths.p9023700} fill="var(--fill-0, #C7C7C7)" id="Vector_21" />
                  <path d={svgPaths.p6c1ef00} fill="var(--fill-0, #C7C7C7)" id="Vector_22" />
                  <path d={svgPaths.p72b1c00} fill="var(--fill-0, #C7C7C7)" id="Vector_23" />
                  <path d={svgPaths.p2314700} fill="var(--fill-0, #C7C7C7)" id="Vector_24" />
                  <path d={svgPaths.p37c5d800} fill="var(--fill-0, #C7C7C7)" id="Vector_25" />
                  <path d={svgPaths.pff72bf0} fill="var(--fill-0, #C7C7C7)" id="Vector_26" />
                  <path d={svgPaths.p908e700} fill="var(--fill-0, #C7C7C7)" id="Vector_27" />
                  <path d={svgPaths.p1cbe5a00} fill="var(--fill-0, #C7C7C7)" id="Vector_28" />
                  <path d={svgPaths.p2fb9b600} fill="var(--fill-0, #C7C7C7)" id="Vector_29" />
                  <path d={svgPaths.p32e1eb40} fill="var(--fill-0, #C7C7C7)" id="Vector_30" />
                  <path d={svgPaths.p2c5f9900} fill="var(--fill-0, #C7C7C7)" id="Vector_31" />
                  <path d={svgPaths.p343b48a0} fill="var(--fill-0, #C7C7C7)" id="Vector_32" />
                  <path d={svgPaths.p7bb76c0} fill="var(--fill-0, #C7C7C7)" id="Vector_33" />
                  <path d={svgPaths.p1a166a00} fill="var(--fill-0, #C7C7C7)" id="Vector_34" />
                  <path d={svgPaths.pd24cd00} fill="var(--fill-0, #C7C7C7)" id="Vector_35" />
                  <path d={svgPaths.p3a38fbe0} fill="var(--fill-0, #C7C7C7)" id="Vector_36" />
                  <path d={svgPaths.p61db780} fill="var(--fill-0, #C7C7C7)" id="Vector_37" />
                  <path d={svgPaths.p10d29780} fill="var(--fill-0, #C7C7C7)" id="Vector_38" />
                  <path d={svgPaths.p175f2f00} fill="var(--fill-0, #DBDBDB)" id="Vector_39" />
                  <path d={svgPaths.p31c5f300} fill="var(--fill-0, #C7C7C7)" id="Vector_40" />
                  <path d={svgPaths.p31bfce70} fill="var(--fill-0, #C7C7C7)" id="Vector_41" />
                  <path d={svgPaths.p88946b0} fill="var(--fill-0, #C7C7C7)" id="Vector_42" />
                  <path d={svgPaths.p2aab6620} fill="var(--fill-0, #C7C7C7)" id="Vector_43" />
                  <path d={svgPaths.pf3d6b30} fill="var(--fill-0, #C7C7C7)" id="Vector_44" />
                  <path d={svgPaths.pa211600} fill="var(--fill-0, #C7C7C7)" id="Vector_45" />
                  <path d={svgPaths.p37c19300} fill="var(--fill-0, #C7C7C7)" id="Vector_46" />
                  <path d={svgPaths.p15cfa00} fill="var(--fill-0, #C7C7C7)" id="Vector_47" />
                  <path d={svgPaths.p8dba600} fill="var(--fill-0, #C7C7C7)" id="Vector_48" />
                  <path d={svgPaths.p323bc840} fill="var(--fill-0, #C7C7C7)" id="Vector_49" />
                  <path d={svgPaths.p38e46b80} fill="var(--fill-0, #C7C7C7)" id="Vector_50" />
                  <path d={svgPaths.p18c8670} fill="var(--fill-0, #C7C7C7)" id="Vector_51" />
                  <path d={svgPaths.p3cb74200} fill="var(--fill-0, #C7C7C7)" id="Vector_52" />
                  <path d={svgPaths.p127aa980} fill="var(--fill-0, #C7C7C7)" id="Vector_53" />
                  <path d={svgPaths.p1e566e00} fill="var(--fill-0, #C7C7C7)" id="Vector_54" />
                  <path d={svgPaths.p383e2500} fill="var(--fill-0, #C7C7C7)" id="Vector_55" />
                  <path d={svgPaths.p1f6273f0} fill="var(--fill-0, #C7C7C7)" id="Vector_56" />
                  <path d={svgPaths.p3d63d00} fill="var(--fill-0, #C7C7C7)" id="Vector_57" />
                  <path d={svgPaths.p2a631500} fill="var(--fill-0, #C7C7C7)" id="Vector_58" />
                  <path d={svgPaths.pfad3180} fill="var(--fill-0, #C7C7C7)" id="Vector_59" />
                  <path d={svgPaths.p10e38d00} fill="var(--fill-0, #C7C7C7)" id="Vector_60" />
                  <path d={svgPaths.p23015ec0} fill="var(--fill-0, #C7C7C7)" id="Vector_61" />
                  <path d={svgPaths.p3b70f00} fill="var(--fill-0, #C7C7C7)" id="Vector_62" />
                  <path d={svgPaths.p1567800} fill="var(--fill-0, #C7C7C7)" id="Vector_63" />
                  <path d={svgPaths.p330aea80} fill="var(--fill-0, #C7C7C7)" id="Vector_64" />
                  <path d={svgPaths.p32560480} fill="var(--fill-0, #C7C7C7)" id="Vector_65" />
                  <path d={svgPaths.p2580f680} fill="var(--fill-0, #C7C7C7)" id="Vector_66" />
                </g>
              </svg>
            </div>
            <div className="absolute inset-[41.31%_28.13%_30.22%_28.13%]" data-name="Character">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 335.926 317.995">
                <g id="Character">
                  <path d={svgPaths.pc9de00} fill="var(--fill-0, #263238)" id="Vector" />
                  <path d={svgPaths.p2dbeef00} fill="var(--fill-0, #263238)" id="Vector_2" />
                  <path d={svgPaths.p22428500} fill="var(--fill-0, #263238)" id="Vector_3" />
                  <path d={svgPaths.p14a9df00} fill="var(--fill-0, #F7A9A0)" id="Vector_4" />
                  <path d={svgPaths.p3132a180} fill="var(--fill-0, #7CAC8A)" id="Vector_5" />
                  <path d={svgPaths.p12f886c0} fill="var(--fill-0, white)" id="Vector_6" />
                  <path d={svgPaths.p1b693280} fill="var(--fill-0, #F7A9A0)" id="Vector_7" />
                  <path d={svgPaths.p5729480} fill="var(--fill-0, #7CAC8A)" id="Vector_8" />
                  <path d={svgPaths.p3118a500} fill="var(--fill-0, #263238)" id="Vector_9" />
                  <path d={svgPaths.p35890b00} fill="var(--fill-0, #263238)" id="Vector_10" />
                  <path d={svgPaths.p1a485380} fill="var(--fill-0, #263238)" id="Vector_11" />
                  <path d={svgPaths.p1248bac0} fill="var(--fill-0, #263238)" id="Vector_12" />
                  <path d={svgPaths.p33d79000} fill="var(--fill-0, #7CAC8A)" id="Vector_13" />
                  <path d={svgPaths.p36f2fbf2} fill="var(--fill-0, black)" id="Vector_14" opacity="0.12" />
                  <path d={svgPaths.p1239c0c0} fill="var(--fill-0, #7CAC8A)" id="Vector_15" />
                  <path d={svgPaths.p13462f00} fill="var(--fill-0, #455A64)" id="Vector_16" />
                  <path d={svgPaths.p3797d700} fill="var(--fill-0, #7CAC8A)" id="Vector_17" />
                  <path d={svgPaths.p8b97b40} fill="var(--fill-0, black)" id="Vector_18" opacity="0.12" />
                  <path d={svgPaths.p1193e200} fill="var(--fill-0, #7CAC8A)" id="Vector_19" />
                  <path d={svgPaths.p3e22b980} fill="var(--fill-0, black)" id="Vector_20" opacity="0.12" />
                  <path d={svgPaths.p1eaa3400} fill="var(--fill-0, #7CAC8A)" id="Vector_21" />
                  <path d={svgPaths.p38fc0bf0} fill="var(--fill-0, black)" id="Vector_22" opacity="0.12" />
                  <path d={svgPaths.p34604100} fill="var(--fill-0, #7CAC8A)" id="Vector_23" />
                  <path d={svgPaths.p1295d780} fill="var(--fill-0, black)" id="Vector_24" opacity="0.12" />
                  <path d={svgPaths.p1e6ca870} fill="var(--fill-0, #7CAC8A)" id="Vector_25" />
                  <path d={svgPaths.p33851e00} fill="var(--fill-0, black)" id="Vector_26" opacity="0.12" />
                  <path d={svgPaths.p25745900} fill="var(--fill-0, #F7A9A0)" id="Vector_27" />
                  <path d={svgPaths.p271cc100} fill="var(--fill-0, #F7A9A0)" id="Vector_28" />
                  <path d={svgPaths.p3f627400} fill="var(--fill-0, #263238)" id="Vector_29" />
                  <path d={svgPaths.p136f8400} fill="var(--fill-0, #263238)" id="Vector_30" />
                  <path d={svgPaths.p22576b80} fill="var(--fill-0, #263238)" id="Vector_31" />
                  <path d={svgPaths.p3f5ac800} fill="var(--fill-0, #263238)" id="Vector_32" />
                  <path d={svgPaths.p48c3400} fill="var(--fill-0, #7CAC8A)" id="Vector_33" />
                  <path d={svgPaths.p32d84000} fill="var(--fill-0, white)" id="Vector_34" />
                  <path d={svgPaths.p31227580} fill="var(--fill-0, #263238)" id="Vector_35" />
                  <path d={svgPaths.p2e8f0900} fill="var(--fill-0, #263238)" id="Vector_36" />
                  <path d={svgPaths.p33e3ba00} fill="var(--fill-0, #263238)" id="Vector_37" />
                  <path d={svgPaths.p20784f00} fill="var(--fill-0, #7CAC8A)" id="Vector_38" />
                  <path d={svgPaths.p2046f9c0} fill="var(--fill-0, white)" id="Vector_39" />
                  <path d={svgPaths.p31a6cc80} fill="var(--fill-0, #263238)" id="Vector_40" />
                  <path d={svgPaths.p3dbdf000} fill="var(--fill-0, #F7A9A0)" id="Vector_41" />
                  <path d={svgPaths.p26375100} fill="var(--fill-0, #F7A9A0)" id="Vector_42" />
                  <path d={svgPaths.p2a35d300} fill="var(--fill-0, #263238)" id="Vector_43" />
                  <path d={svgPaths.p2806f900} fill="var(--fill-0, #263238)" id="Vector_44" />
                  <path d={svgPaths.p3a0bf980} fill="var(--fill-0, #263238)" id="Vector_45" />
                  <path d={svgPaths.p11640900} fill="var(--fill-0, #F7A9A0)" id="Vector_46" />
                  <path d={svgPaths.p1d7fd000} fill="var(--fill-0, #263238)" id="Vector_47" />
                  <path d={svgPaths.p4412b00} fill="var(--fill-0, #7CAC8A)" id="Vector_48" />
                  <path d={svgPaths.p38df5b00} fill="var(--fill-0, white)" id="Vector_49" />
                  <path d={svgPaths.p9800100} fill="var(--fill-0, #263238)" id="Vector_50" />
                  <path d={svgPaths.p3c3a9a00} fill="var(--fill-0, #263238)" id="Vector_51" />
                  <path d={svgPaths.p176e1480} fill="var(--fill-0, #F7A9A0)" id="Vector_52" />
                  <path d={svgPaths.p3f477d80} fill="var(--fill-0, #263238)" id="Vector_53" />
                  <path d={svgPaths.p1af4d400} fill="var(--fill-0, #F7A9A0)" id="Vector_54" />
                  <path d={svgPaths.p2dc28e00} fill="var(--fill-0, #263238)" id="Vector_55" />
                  <path d={svgPaths.pbd30300} fill="var(--fill-0, #263238)" id="Vector_56" />
                  <path d={svgPaths.pb223880} fill="var(--fill-0, #263238)" id="Vector_57" />
                  <path d={svgPaths.p1149b600} fill="var(--fill-0, #263238)" id="Vector_58" />
                  <path d={svgPaths.p1afb3600} fill="var(--fill-0, #263238)" id="Vector_59" />
                  <path d={svgPaths.p17b00800} fill="var(--fill-0, #263238)" id="Vector_60" />
                  <path d={svgPaths.pab79a00} fill="var(--fill-0, #263238)" id="Vector_61" />
                  <path d={svgPaths.p3480e080} fill="var(--fill-0, #263238)" id="Vector_62" />
                  <path d={svgPaths.p3ca3700} fill="var(--fill-0, #263238)" id="Vector_63" />
                  <path d={svgPaths.p4715970} fill="var(--fill-0, #263238)" id="Vector_64" />
                  <path d={svgPaths.p33363380} fill="var(--fill-0, #263238)" id="Vector_65" />
                  <path d={svgPaths.p2b105a00} fill="var(--fill-0, #FF9CBD)" id="Vector_66" />
                  <path d={svgPaths.p25140100} fill="var(--fill-0, #263238)" id="Vector_67" />
                  <path d={svgPaths.p3dc18800} fill="var(--fill-0, #7CAC8A)" id="Vector_68" />
                  <path d={svgPaths.p20f3e300} fill="var(--fill-0, #F7A9A0)" id="Vector_69" />
                  <path d={svgPaths.p15eb0480} fill="var(--fill-0, #263238)" id="Vector_70" />
                </g>
              </svg>
            </div>
            <div className="absolute inset-[37.22%_33.33%_56.31%_53.77%]" data-name="speech-bubble">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 99.062 72.3276">
                <g id="speech-bubble">
                  <path d={svgPaths.p38c64300} fill="var(--fill-0, white)" id="Vector" />
                  <path d={svgPaths.p1f976c00} fill="var(--fill-0, #263238)" id="Vector_2" />
                  <path d={svgPaths.p12231880} fill="var(--fill-0, #263238)" id="Vector_3" />
                  <path d={svgPaths.p2bb6dec0} fill="var(--fill-0, #263238)" id="Vector_4" />
                  <path d={svgPaths.p12bc700} fill="var(--fill-0, #263238)" id="Vector_5" />
                  <path d={svgPaths.p25f41480} fill="var(--fill-0, #263238)" id="Vector_6" />
                  <path d={svgPaths.p21b30340} fill="var(--fill-0, #263238)" id="Vector_7" />
                  <path d={svgPaths.p27a73580} fill="var(--fill-0, #263238)" id="Vector_8" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Logo className="absolute h-[42px] left-[112px] top-[88px] w-[140px]" state="Black" />
      <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[32px] items-start left-[58.33%] top-1/2 w-[488px]">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#272a28] text-[36px] tracking-[-1.44px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Welcome Back
          </p>
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#555c56] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Log into your account
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                <Frame129Input>
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Label + Frame">
                    <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#101928] text-[14px] w-full">
                      <p className="leading-[1.45]">Email</p>
                    </div>
                    <InputFrame>
                      <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Left Content">
                        <div className="content-stretch flex gap-[2px] h-[20px] items-center shrink-0 w-[79px]" data-name="Text + Cursor" />
                      </div>
                      <div className="content-stretch flex gap-[4px] items-center shrink-0 size-[20px]" data-name="Right Content" />
                    </InputFrame>
                  </div>
                </Frame129Input>
                <Frame129Input>
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Label + Frame">
                    <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#101928] text-[14px] w-full">
                      <p className="leading-[1.45]">Password</p>
                    </div>
                    <InputFrame>
                      <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Left Content">
                        <div className="content-stretch flex gap-[2px] h-[20px] items-center shrink-0 w-[79px]" data-name="Text + Cursor" />
                      </div>
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Right Content">
                        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon-right">
                          <div className="absolute inset-[12.5%_6.61%]" data-name="icon">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3563 15">
                              <g id="icon">
                                <path d={svgPaths.p2b903500} fill="var(--fill-0, #667185)" />
                                <path d={svgPaths.p334a0200} fill="var(--fill-0, #667185)" />
                                <path d={svgPaths.p22443bb0} fill="var(--fill-0, #667185)" />
                                <path d={svgPaths.p70aa070} fill="var(--fill-0, #667185)" />
                                <path d={svgPaths.p2ddf2c80} fill="var(--fill-0, #667185)" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </InputFrame>
                  </div>
                </Frame129Input>
              </div>
              <Wrapper2 additionalClassNames="bg-[#377749] rounded-[100px] w-full">
                <div className="content-stretch flex flex-col items-center justify-center px-[32px] py-[16px] relative w-full">
                  <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
                    <Wrapper1 additionalClassNames="text-[16px] text-white">Login</Wrapper1>
                  </div>
                </div>
              </Wrapper2>
            </div>
            <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5d655f] text-[16px] text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[1.45]">or</p>
            </div>
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
              <Frame131ButtonSecondary>
                <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Container">
                  <div className="relative shrink-0 size-[26.667px]" data-name="button-icon">
                    <div className="absolute inset-[6.25%_7.74%_6.29%_7.81%]" data-name="Group">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.2685 20.9912">
                        <g id="Group">
                          <path clipRule="evenodd" d={svgPaths.pce780} fill="var(--fill-0, #F44336)" fillRule="evenodd" id="Vector" opacity="0.987" />
                          <path clipRule="evenodd" d={svgPaths.p3f39300} fill="var(--fill-0, #FFC107)" fillRule="evenodd" id="Vector_2" opacity="0.997" />
                          <path clipRule="evenodd" d={svgPaths.pd1d4200} fill="var(--fill-0, #448AFF)" fillRule="evenodd" id="Vector_3" opacity="0.999" />
                          <path clipRule="evenodd" d={svgPaths.p3a074200} fill="var(--fill-0, #43A047)" fillRule="evenodd" id="Vector_4" opacity="0.993" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <Wrapper1 additionalClassNames="text-[#377749] text-[16px]">Google</Wrapper1>
                </div>
              </Frame131ButtonSecondary>
              <Frame131ButtonSecondary>
                <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Container">
                  <div className="overflow-clip relative shrink-0 size-[26.667px]" data-name="button-icon">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d={svgPaths.p3806cc80} fill="url(#paint0_linear_1_16621)" id="Vector" />
                      <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_16621" x1="3.51471" x2="20.4852" y1="3.51471" y2="20.4852">
                          <stop stopColor="#2489BE" />
                          <stop offset="1" stopColor="#0575B3" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <Wrapper1 additionalClassNames="text-[#377749] text-[16px]">Linkedln</Wrapper1>
                </div>
              </Frame131ButtonSecondary>
            </div>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
            <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.45] relative shrink-0 text-[#555c56] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Already have an account?
            </p>
            <Wrapper2 additionalClassNames="rounded-[8px]">
              <div className="content-stretch flex flex-col items-center justify-center relative">
                <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
                  <Wrapper1 additionalClassNames="text-[#3c8350] text-[14px]">Register</Wrapper1>
                </div>
              </div>
            </Wrapper2>
          </div>
        </div>
      </div>
    </div>
  );
}