import { CardStack, NmaCards, MilesCards, SercleCards, CheckDDCards } from '../components/card';
import Image from "next/image";
import Link from "next/link";


export default function Portfolio() {
  return (
    <div className=" min-h-full flex flex-col justify-evenly space-y-5">
      <div>
        <h1 className="body-heading1">portfolio</h1>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 h-[70vh] lg:p-5 overflow-auto" >
        <Link href={"https://nmasinachiskitchen.com.ng/"} target='_blank'>
          <div className="flex flex-col justify-center items-center h-[25rem] md:h-[28rem] w-full p-3 space-y-10 bg-gray-500 backdrop-filter backdrop-blur-[20px] bg-opacity-30 border-2 rounded-2xl">
              <div className="flex flex-row space-x-5 justify-center items-center cursor-pointer">
                <Image
                  alt="ProfilePic"
                  src="/assets/nma/logo.png"
                  width={1000}
                  height={1000}
                  className="w-10 h-10 rounded-full shadow-lg"
                ></Image>
                <h1 className="font-syne font-bold text-xl md:text-2xl">{`Nmasinachi's Kitchen`}</h1>
              </div>
              <div className="flex flex-row justify-center items-center space-x-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="2.2rem" height="2.2rem" viewBox="0 0 24 24">
                  <g fill="none">
                    <g fill="currentColor" clip-path="url(#akarIconsHtmlFill0)">
                      <path d="M5.08 0h1.082v1.069h.99V0h1.082v3.236H7.152V2.153h-.99v1.083H5.081zm4.576 1.073h-.952V0h2.987v1.073h-.953v2.163H9.656zM12.165 0h1.128l.694 1.137L14.68 0h1.128v3.236h-1.077V1.632l-.744 1.151h-.019l-.745-1.15v1.603h-1.058zm4.181 0h1.083v2.167h1.52v1.07h-2.603z" />
                      <path fill-rule="evenodd" d="M5.046 22.072L3 4.717h18L18.953 22.07L11.99 24zm4.137-9.5l-.194-2.18h8.145l.19-2.128H6.664l.574 6.437h7.377l-.247 2.76l-2.374.642h-.002l-2.37-.64l-.152-1.697H7.332l.298 3.342l4.36 1.21l4.367-1.21l.532-5.964l.052-.571z" clip-rule="evenodd" />
                    </g>
                    <defs>
                      <clipPath id="akarIconsHtmlFill0">
                        <path fill="#fff" d="M0 0h24v24H0z" />
                      </clipPath>
                    </defs>
                  </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="2.2rem" height="2.2rem" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M7.502 0h2.578v1.078h-1.5v1.078h1.5v1.078H7.502zm3.093 0h2.579v.938h-1.5v.187h1.5v2.156h-2.579v-.984h1.5v-.188h-1.5zm3.095 0h2.577v.938h-1.5v.187h1.5v2.156H13.69v-.984h1.5v-.188h-1.5z" />
                  <path fill="currentColor" fill-rule="evenodd" d="m11.991 24l-6.944-1.928L3 4.717h18L18.954 22.07zM7.047 12.573l.191 2.128h7.377l-.247 2.76l-2.374.642h-.002l-2.37-.64l-.152-1.697H7.333l.298 3.342l4.36 1.21l4.367-1.21l.532-5.964l.052-.571l.384-4.309H6.664l.194 2.129h8.136l-.194 2.18z" clip-rule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="2.2rem" height="2.2rem" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M3 3h18v18H3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155c-.552-.259-1.165-.438-1.349-.854c-.068-.248-.078-.382-.034-.529c.113-.484.687-.629 1.137-.495c.293.09.563.315.732.676c.775-.507.775-.507 1.316-.844c-.203-.314-.304-.451-.439-.586c-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754c-.855.968-.608 2.655.427 3.354c1.023.765 2.521.933 2.712 1.653c.18.878-.652 1.159-1.475 1.058c-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832c1.305 1.316 4.568 1.249 5.153-.754c.021-.067.18-.528.056-1.237zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354c0 .924.047 1.772-.104 2.033c-.247.517-.886.451-1.175.359c-.297-.146-.448-.349-.623-.641c-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137c.641.383 1.502.507 2.404.305c.588-.17 1.095-.519 1.358-1.059c.384-.697.302-1.553.299-2.509c.008-1.541 0-3.083 0-4.635z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="2.2rem" height="2.2rem" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 5.5C5.271 5.5 0 8.355 0 12s5.271 6.5 12 6.5s12-2.855 12-6.5s-5.271-6.5-12-6.5m-1.246 2h1.31l-.416 2h1.17c.742 0 1.24.104 1.524.363c.277.256.361.676.25 1.248l-.52 2.389H12.74l.479-2.209c.058-.303.035-.514-.067-.625c-.101-.111-.324-.166-.658-.166h-1.049l-.633 3H9.5zM5 9.5h2.666c1.271 0 2.041.852 1.74 2.123C9.056 13.1 8.12 13.5 6.396 13.5h-.824L5.311 15H3.986zm10.5 0h2.666c1.271 0 2.041.852 1.74 2.123c-.35 1.477-1.287 1.877-3.01 1.877h-.824l-.261 1.5h-1.325zm-9.365 1l-.377 2h.855c.74 0 1.428-.084 1.543-1.187c.043-.428-.135-.813-.99-.813zm10.5 0l-.377 2h.855c.74 0 1.428-.084 1.543-1.187c.043-.428-.134-.813-.99-.813z" />
                </svg>
              </div>
              <CardStack items={NmaCards}  offset={9}/>
          </div>
        </Link>
        <Link href={"https://milesvilla.com/"} target='_blank'>
          <div className="flex flex-col justify-center items-center h-[25rem] md:h-[28rem] w-full p-3 space-y-10 bg-gray-500 backdrop-filter backdrop-blur-[20px] bg-opacity-30 border-2 rounded-2xl">
            <div className="flex flex-row space-x-5 justify-center items-center">
              <Image
                alt="ProfilePic"
                src="/assets/miles/logo.png"
                width={1000}
                height={1000}
                className="w-10 h-10 rounded-full shadow-lg"
              ></Image>
              <h1 className="font-syne font-bold text-2xl md:text-3xl">Miles Villa</h1>
            </div>
            <div className="flex flex-row justify-center items-center space-x-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="2.2rem" height="2.2rem" viewBox="0 0 24 24">
                <g fill="none">
                  <g fill="currentColor" clip-path="url(#akarIconsHtmlFill0)">
                    <path d="M5.08 0h1.082v1.069h.99V0h1.082v3.236H7.152V2.153h-.99v1.083H5.081zm4.576 1.073h-.952V0h2.987v1.073h-.953v2.163H9.656zM12.165 0h1.128l.694 1.137L14.68 0h1.128v3.236h-1.077V1.632l-.744 1.151h-.019l-.745-1.15v1.603h-1.058zm4.181 0h1.083v2.167h1.52v1.07h-2.603z" />
                    <path fill-rule="evenodd" d="M5.046 22.072L3 4.717h18L18.953 22.07L11.99 24zm4.137-9.5l-.194-2.18h8.145l.19-2.128H6.664l.574 6.437h7.377l-.247 2.76l-2.374.642h-.002l-2.37-.64l-.152-1.697H7.332l.298 3.342l4.36 1.21l4.367-1.21l.532-5.964l.052-.571z" clip-rule="evenodd" />
                  </g>
                  <defs>
                    <clipPath id="akarIconsHtmlFill0">
                      <path fill="#fff" d="M0 0h24v24H0z" />
                    </clipPath>
                  </defs>
                </g>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="2.2rem" height="2.2rem" viewBox="0 0 24 24">
                <path fill="currentColor" d="M7.502 0h2.578v1.078h-1.5v1.078h1.5v1.078H7.502zm3.093 0h2.579v.938h-1.5v.187h1.5v2.156h-2.579v-.984h1.5v-.188h-1.5zm3.095 0h2.577v.938h-1.5v.187h1.5v2.156H13.69v-.984h1.5v-.188h-1.5z" />
                <path fill="currentColor" fill-rule="evenodd" d="m11.991 24l-6.944-1.928L3 4.717h18L18.954 22.07zM7.047 12.573l.191 2.128h7.377l-.247 2.76l-2.374.642h-.002l-2.37-.64l-.152-1.697H7.333l.298 3.342l4.36 1.21l4.367-1.21l.532-5.964l.052-.571l.384-4.309H6.664l.194 2.129h8.136l-.194 2.18z" clip-rule="evenodd" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="2.2rem" height="2.2rem" viewBox="0 0 24 24">
                <path fill="currentColor" d="M3 3h18v18H3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155c-.552-.259-1.165-.438-1.349-.854c-.068-.248-.078-.382-.034-.529c.113-.484.687-.629 1.137-.495c.293.09.563.315.732.676c.775-.507.775-.507 1.316-.844c-.203-.314-.304-.451-.439-.586c-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754c-.855.968-.608 2.655.427 3.354c1.023.765 2.521.933 2.712 1.653c.18.878-.652 1.159-1.475 1.058c-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832c1.305 1.316 4.568 1.249 5.153-.754c.021-.067.18-.528.056-1.237zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354c0 .924.047 1.772-.104 2.033c-.247.517-.886.451-1.175.359c-.297-.146-.448-.349-.623-.641c-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137c.641.383 1.502.507 2.404.305c.588-.17 1.095-.519 1.358-1.059c.384-.697.302-1.553.299-2.509c.008-1.541 0-3.083 0-4.635z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="2.2rem" height="2.2rem" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 5.5C5.271 5.5 0 8.355 0 12s5.271 6.5 12 6.5s12-2.855 12-6.5s-5.271-6.5-12-6.5m-1.246 2h1.31l-.416 2h1.17c.742 0 1.24.104 1.524.363c.277.256.361.676.25 1.248l-.52 2.389H12.74l.479-2.209c.058-.303.035-.514-.067-.625c-.101-.111-.324-.166-.658-.166h-1.049l-.633 3H9.5zM5 9.5h2.666c1.271 0 2.041.852 1.74 2.123C9.056 13.1 8.12 13.5 6.396 13.5h-.824L5.311 15H3.986zm10.5 0h2.666c1.271 0 2.041.852 1.74 2.123c-.35 1.477-1.287 1.877-3.01 1.877h-.824l-.261 1.5h-1.325zm-9.365 1l-.377 2h.855c.74 0 1.428-.084 1.543-1.187c.043-.428-.135-.813-.99-.813zm10.5 0l-.377 2h.855c.74 0 1.428-.084 1.543-1.187c.043-.428-.134-.813-.99-.813z" />
              </svg>
            </div>
            <CardStack items={MilesCards} offset={6} />
          </div>
        </Link>
        <Link href={"https://sercleinc.org/"} target='_blank'>
          <div className="flex flex-col justify-center items-center h-[25rem] md:h-[28rem] w-full p-3 space-y-10 bg-gray-500 backdrop-filter backdrop-blur-[20px] bg-opacity-30 border-2 rounded-2xl">
            <div className="flex flex-row space-x-5 justify-center items-center">
              <Image
                alt="logo"
                src="/assets/sercle/logo.png"
                width={1000}
                height={1000}
                className="w-10 h-10 rounded-full shadow-lg"
              ></Image>
              <h1 className="font-syne font-bold text-2xl md:text-3xl">SercleInc</h1>
            </div>
            <div className="flex flex-row justify-center items-center space-x-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="2.2rem" height="2.2rem" viewBox="0 0 24 24">
                <g fill="none">
                  <g fill="currentColor" clip-path="url(#akarIconsHtmlFill0)">
                    <path d="M5.08 0h1.082v1.069h.99V0h1.082v3.236H7.152V2.153h-.99v1.083H5.081zm4.576 1.073h-.952V0h2.987v1.073h-.953v2.163H9.656zM12.165 0h1.128l.694 1.137L14.68 0h1.128v3.236h-1.077V1.632l-.744 1.151h-.019l-.745-1.15v1.603h-1.058zm4.181 0h1.083v2.167h1.52v1.07h-2.603z" />
                    <path fill-rule="evenodd" d="M5.046 22.072L3 4.717h18L18.953 22.07L11.99 24zm4.137-9.5l-.194-2.18h8.145l.19-2.128H6.664l.574 6.437h7.377l-.247 2.76l-2.374.642h-.002l-2.37-.64l-.152-1.697H7.332l.298 3.342l4.36 1.21l4.367-1.21l.532-5.964l.052-.571z" clip-rule="evenodd" />
                  </g>
                  <defs>
                    <clipPath id="akarIconsHtmlFill0">
                      <path fill="#fff" d="M0 0h24v24H0z" />
                    </clipPath>
                  </defs>
                </g>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="2.2rem" height="2.2rem" viewBox="0 0 24 24">
                <path fill="currentColor" d="M7.502 0h2.578v1.078h-1.5v1.078h1.5v1.078H7.502zm3.093 0h2.579v.938h-1.5v.187h1.5v2.156h-2.579v-.984h1.5v-.188h-1.5zm3.095 0h2.577v.938h-1.5v.187h1.5v2.156H13.69v-.984h1.5v-.188h-1.5z" />
                <path fill="currentColor" fill-rule="evenodd" d="m11.991 24l-6.944-1.928L3 4.717h18L18.954 22.07zM7.047 12.573l.191 2.128h7.377l-.247 2.76l-2.374.642h-.002l-2.37-.64l-.152-1.697H7.333l.298 3.342l4.36 1.21l4.367-1.21l.532-5.964l.052-.571l.384-4.309H6.664l.194 2.129h8.136l-.194 2.18z" clip-rule="evenodd" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="2.2rem" height="2.2rem" viewBox="0 0 24 24">
                <path fill="currentColor" d="M3 3h18v18H3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155c-.552-.259-1.165-.438-1.349-.854c-.068-.248-.078-.382-.034-.529c.113-.484.687-.629 1.137-.495c.293.09.563.315.732.676c.775-.507.775-.507 1.316-.844c-.203-.314-.304-.451-.439-.586c-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754c-.855.968-.608 2.655.427 3.354c1.023.765 2.521.933 2.712 1.653c.18.878-.652 1.159-1.475 1.058c-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832c1.305 1.316 4.568 1.249 5.153-.754c.021-.067.18-.528.056-1.237zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354c0 .924.047 1.772-.104 2.033c-.247.517-.886.451-1.175.359c-.297-.146-.448-.349-.623-.641c-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137c.641.383 1.502.507 2.404.305c.588-.17 1.095-.519 1.358-1.059c.384-.697.302-1.553.299-2.509c.008-1.541 0-3.083 0-4.635z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="2.2rem" height="2.2rem" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 5.5C5.271 5.5 0 8.355 0 12s5.271 6.5 12 6.5s12-2.855 12-6.5s-5.271-6.5-12-6.5m-1.246 2h1.31l-.416 2h1.17c.742 0 1.24.104 1.524.363c.277.256.361.676.25 1.248l-.52 2.389H12.74l.479-2.209c.058-.303.035-.514-.067-.625c-.101-.111-.324-.166-.658-.166h-1.049l-.633 3H9.5zM5 9.5h2.666c1.271 0 2.041.852 1.74 2.123C9.056 13.1 8.12 13.5 6.396 13.5h-.824L5.311 15H3.986zm10.5 0h2.666c1.271 0 2.041.852 1.74 2.123c-.35 1.477-1.287 1.877-3.01 1.877h-.824l-.261 1.5h-1.325zm-9.365 1l-.377 2h.855c.74 0 1.428-.084 1.543-1.187c.043-.428-.135-.813-.99-.813zm10.5 0l-.377 2h.855c.74 0 1.428-.084 1.543-1.187c.043-.428-.134-.813-.99-.813z" />
              </svg>
            </div>
            <CardStack items={SercleCards} offset={6} />
          </div>
        </Link>
        <Link href={"https://checkddecklimited.com/"} target='_blank'>
          <div className="flex flex-col justify-center items-center h-[25rem] md:h-[28rem] w-full p-3 space-y-10 bg-gray-500 backdrop-filter backdrop-blur-[20px] bg-opacity-30 border-2 rounded-2xl">
            <div className="flex flex-row space-x-5 justify-center items-center">
              <Image
                alt="logo"
                src="/assets/check/logo.png"
                width={1000}
                height={1000}
                className="w-10 h-10 rounded-full shadow-lg"
              ></Image>
              <h1 className="font-syne font-bold text-xl md:text-2xl">{`Check D' Deck Homes`}</h1>
            </div>
            <div className="flex flex-row justify-center items-center space-x-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="2.2rem" height="2.2rem" viewBox="0 0 24 24">
                <g fill="none">
                  <g fill="currentColor" clip-path="url(#akarIconsHtmlFill0)">
                    <path d="M5.08 0h1.082v1.069h.99V0h1.082v3.236H7.152V2.153h-.99v1.083H5.081zm4.576 1.073h-.952V0h2.987v1.073h-.953v2.163H9.656zM12.165 0h1.128l.694 1.137L14.68 0h1.128v3.236h-1.077V1.632l-.744 1.151h-.019l-.745-1.15v1.603h-1.058zm4.181 0h1.083v2.167h1.52v1.07h-2.603z" />
                    <path fill-rule="evenodd" d="M5.046 22.072L3 4.717h18L18.953 22.07L11.99 24zm4.137-9.5l-.194-2.18h8.145l.19-2.128H6.664l.574 6.437h7.377l-.247 2.76l-2.374.642h-.002l-2.37-.64l-.152-1.697H7.332l.298 3.342l4.36 1.21l4.367-1.21l.532-5.964l.052-.571z" clip-rule="evenodd" />
                  </g>
                  <defs>
                    <clipPath id="akarIconsHtmlFill0">
                      <path fill="#fff" d="M0 0h24v24H0z" />
                    </clipPath>
                  </defs>
                </g>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="2.2rem" height="2.2rem" viewBox="0 0 24 24">
                <path fill="currentColor" d="M7.502 0h2.578v1.078h-1.5v1.078h1.5v1.078H7.502zm3.093 0h2.579v.938h-1.5v.187h1.5v2.156h-2.579v-.984h1.5v-.188h-1.5zm3.095 0h2.577v.938h-1.5v.187h1.5v2.156H13.69v-.984h1.5v-.188h-1.5z" />
                <path fill="currentColor" fill-rule="evenodd" d="m11.991 24l-6.944-1.928L3 4.717h18L18.954 22.07zM7.047 12.573l.191 2.128h7.377l-.247 2.76l-2.374.642h-.002l-2.37-.64l-.152-1.697H7.333l.298 3.342l4.36 1.21l4.367-1.21l.532-5.964l.052-.571l.384-4.309H6.664l.194 2.129h8.136l-.194 2.18z" clip-rule="evenodd" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="2.2rem" height="2.2rem" viewBox="0 0 24 24">
                <path fill="currentColor" d="M3 3h18v18H3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155c-.552-.259-1.165-.438-1.349-.854c-.068-.248-.078-.382-.034-.529c.113-.484.687-.629 1.137-.495c.293.09.563.315.732.676c.775-.507.775-.507 1.316-.844c-.203-.314-.304-.451-.439-.586c-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754c-.855.968-.608 2.655.427 3.354c1.023.765 2.521.933 2.712 1.653c.18.878-.652 1.159-1.475 1.058c-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832c1.305 1.316 4.568 1.249 5.153-.754c.021-.067.18-.528.056-1.237zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354c0 .924.047 1.772-.104 2.033c-.247.517-.886.451-1.175.359c-.297-.146-.448-.349-.623-.641c-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137c.641.383 1.502.507 2.404.305c.588-.17 1.095-.519 1.358-1.059c.384-.697.302-1.553.299-2.509c.008-1.541 0-3.083 0-4.635z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="2.2rem" height="2.2rem" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 5.5C5.271 5.5 0 8.355 0 12s5.271 6.5 12 6.5s12-2.855 12-6.5s-5.271-6.5-12-6.5m-1.246 2h1.31l-.416 2h1.17c.742 0 1.24.104 1.524.363c.277.256.361.676.25 1.248l-.52 2.389H12.74l.479-2.209c.058-.303.035-.514-.067-.625c-.101-.111-.324-.166-.658-.166h-1.049l-.633 3H9.5zM5 9.5h2.666c1.271 0 2.041.852 1.74 2.123C9.056 13.1 8.12 13.5 6.396 13.5h-.824L5.311 15H3.986zm10.5 0h2.666c1.271 0 2.041.852 1.74 2.123c-.35 1.477-1.287 1.877-3.01 1.877h-.824l-.261 1.5h-1.325zm-9.365 1l-.377 2h.855c.74 0 1.428-.084 1.543-1.187c.043-.428-.135-.813-.99-.813zm10.5 0l-.377 2h.855c.74 0 1.428-.084 1.543-1.187c.043-.428-.134-.813-.99-.813z" />
              </svg>
            </div>
            <CardStack items={CheckDDCards} offset={6} />
          </div>
        </Link>
      </div>
    </div>
  )
}