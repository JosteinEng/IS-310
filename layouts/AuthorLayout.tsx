import { ReactNode } from "react";
import type { Authors } from "contentlayer/generated";
import SocialIcon from "@/components/social-icons";
import Image from "@/components/Image";

interface Props {
  children: ReactNode;
  content: Omit<Authors, "_id" | "_raw" | "body">;
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, linkedin, github } = content;

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700 ">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Hello World!
          </h1>
          <img src="/static/images/gruppe_photo.jpg"></img>
          <h5 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">
            Velkommen til oss i gruppe 9!
          </h5>
          <p>Studentgruppen som representerer gruppe 9 har over flere semestere jobbet delaktig sammen for å utarbeide gode resultater og lærdom gjennom bachelorprogrammet, IT og Informasjonssystemer ved UiA. Gjennom studiene har studentene bygget god faglig kompetanse på både individuelt plan, og i felleskap. Gruppen har sammen utarbeidet en arbeidsdynamikk som effektivt tar i bruk enkeltpersoners evner, erfaringer, styrker og svakheter, for å skape et arbeidsmiljø som er inkluderende og effektivt ved prosjektgjennomføring og arbeid. Denne sammensetningen skaper rom for åpenhet, troverdighet og utfyllelse ved hverandres evner, tanker og ønsker ved et gitt arbeid.</p>
          </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            {avatar && (
              <Image
                src={avatar}
                alt="Selfie"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full"
              />
            )}
            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">
              {name}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
            </div>
          </div>
          <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}
