import Image from "next/image";
import { MailContainer } from "./components/MailContainer/MailContainer";

export default function Home() {
  return (
    <main className="flex font-GoBold min-h-screen flex-col items-center bg-neutral-900">
      <Image
        alt="Logo do site"
        src="/logo-bird.png"
        width={400}
        height={116}
        className="mt-[-3rem]"
      />
      <section className="mt-[-4.5rem] flex flex-col w-[550px] text-xl text-center text-gray-50 gap-7">
        <h1 className="text-3xl">
          DESBLOQUEIE SEU POTENCIAL DE VENDAS COM A{" "}
          <span className="text-yellow-300">MEU DOM, MEU BICO</span>
        </h1>
        <p>INSCREVA-SE PARA TE ATUALIZARMOS SOBRE O SERVIÇO!</p>
        <MailContainer />
      </section>

      <footer className="flex flex-col text-center text-gray-50 p-5 mt-44">
        <p>© COPYRIGHT 2024 - MEU DOM, MEU BICO</p>
        <p>TODOS OS DIREITOS RESERVADOS</p>
      </footer>
    </main>
  );
}
