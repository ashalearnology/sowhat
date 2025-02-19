"use client";
import { CiShare2 } from "react-icons/ci";
import Link from "next/link";

export default function Shop() {
  return (
    <div>
      <div className="px-20 max-sm:px-4 max-lg:px-10  max-xl:px-24 max-2xl:px-0">
        <div className="flex w-full text-center">
          <div className="px-72 max-xl:px-0 max-2xl:px-54 items-center justify-center">
            <div className="px-36 max-xl:px-0 max-2xl:px-20">
              <p className="font-medium py-2">June 20, 2023</p>

              <p className="text-4xl font-medium font-serif ">
                Moda sostenibile - 5{" "}
              </p>
              <p className="text-4xl font-medium  font-serif">
                consigli per riconoscere un brand etico che fa tendenza!
              </p>
              <span className="font-medium mt-2">Ilaria Bonini</span>
              <div className="w-full my-8 flex justify-center">
                <button className="flex items-center text-center gap-2 border border-gray-400 rounded-full py-2 px-4 text-lg font-medium">
                  <CiShare2 />
                  Share
                </button>
              </div>
            </div>
            <img src="image.jpg" alt="image" className="px-0"/>
            <div className="px-32 max-md:px-0 max-lg:px-20 max-2xl:px-20 font-serif">
              <p className="py-8 uppercase text-4xl max-sm:text-2xl font-medium">
                Moda sostenibile VS Fast Fashion. Virtù o greenwashing?
              </p>
              <p className="uppercase pb-8 text-4xl font-medium">
                Quando il confine è labile, spetta al consumatore farsi furbo!
                So What ti dà 5 consigli per capire come acquistare a impatto 0!
              </p>
              <div className="text-start font-medium">
                <h6>
                  <b>Cassetti colmi,</b> capi con ancora attaccata letichetta e
                  quel vestito così bello<b> messo soltanto una volta</b> per un
                  aperitivo. Facile ritrovarsi in unesperienza simile in quanto,
                  negli ultimi decenni, il settore della moda ci ha insegnato
                  che esiste un capo perfetto per ogni singola occasione e, a
                  guidare
                  <b>lacquisto,</b> non è più la<b> necessità </b>ma la{" "}
                  <b>voglia di cambiare.</b>
                </h6>
                <h6 className="pt-8">
                  L'
                  <Link href="#" className="text-red-500 font-bold underline">
                    Onu{" "}
                  </Link>
                  stima a<b> 2,4 triliardi di dollari</b> il valore della{" "}
                  <b>moda globale,</b>
                  con limpiego di 300 milioni di dipendenti ed <b>emissioni</b>
                  pari all<b>8%</b> sulle globali. La <b>dispersione</b> di{" "}
                  <b>microplastiche</b> in <b>acqua,</b>a causa della filiera di
                  produzione, arriva al <b>9%</b> sul totale mondiale.
                </h6>
                <h5 className="pt-8">
                  Per non citare l’impiego di <b>215 trilioni di acqua,</b>{" "}
                  impiegati per la produzione di capi di <b>abbigliamento</b>{" "}
                  che, con molta probabilità, finiranno in{" "}
                  <b>discariche a cielo aperto</b> in Paesi economicamente
                  svantaggiati.
                </h5>
                <h5 className="pt-8">
                  La buona notizia è che però, oggigiorno, i <b>consumatori</b>{" "}
                  sono
                  <b>sempre più informati e consapevoli</b> che ciò che{" "}
                  <b>acquistano a pochi euro abbia,</b> in realtà,{" "}
                  <b>un costo ben più alto;</b> sia in termini di{" "}
                  <b>sfruttamento</b> delle <b>risorse terrestri</b> che di
                  sfruttamento dei <b>lavoratori.</b>{" "}
                </h5>
                <h5 className="pt-8">
                  Articoli di giornale, servizi di inchiesta e documentari
                  stanno sempre più mettendo in luce il{" "}
                  <b>lato oscuro del fast fashion e</b> il successo riscosso
                  dalla recente uscita della docuserie,
                  <Link href="#" className="text-red-500 underline">
                    Junk - Armadi pieni,
                  </Link>
                  conferma un crescente <b>interesse</b> al riguardo.
                </h5>
                <h5 className="pt-8">
                  Ritorno di capi <b>vintage,</b> nascita di <b>app</b>{" "}
                  attraverso cui <b>vendere </b>e <b>acquistare</b> abiti{" "}
                  <b>second hand:</b> i consumatori vogliono acquistare
                  impattando sempre meno sul Pianeta.
                </h5>
                <p>Il futuro della moda sostenibile</p>
                <h5>
                  Per moda sostenibile non si intende soltanto il processo di
                  <b> produzione, distribuzione, vendita e recupero</b> di capi
                  di abbigliamento secondo parametri in grado di{" "}
                  <b>rispettare l’ambiente.</b>
                </h5>
                <h5>
                  La moda sostenibile prevede anche un modello basato sul
                  <b>benessere,</b> e non lo sfruttamento, dei{" "}
                  <b>lavoratori;</b> questo grazie a <b>equi compensi</b> e
                  l'impiego per un <b>giusto numero</b> di <b>ore.</b>
                </h5>
                <h5 className="mt-8">
                  Una moda più etica e green attinge a <b>materiali locali</b>{" "}
                  (canapa, scarti derivati da produzioni locali quali bucce di
                  mela, di arancia ecc.) <b>abbattendo </b>così le{" "}
                  <b>emissioni di gas serra</b> legate ai trasporti e{" "}
                  <b>riducendo</b> anche lo <b>spreco di risorse,</b> grazie
                  all’impiego di <b>processi di produzione innovativi.</b> La
                  nascita di un marchio sostenibile richiede <b>tempo</b> così
                  come sono necessari
                  <b>anni</b> per vedere <b>corposi ricavi.</b>
                </h5>
                <h5 className="mt-8">
                  Per questa ragione è più facile fingersi sostenibili rispetto
                  ad esserlo veramente 😅
                </h5>
                <p>
                  Molti sono i brand di moda che, attraverso ciò che tutti
                  conosciamo con il nome di{" "}
                  <b>
                    <i>greenwashing,</i>
                  </b>{" "}
                  si definiscono "<b>verdi</b>" pur non essendolo affatto. Ma{" "}
                  <b>come distinguere</b> un marchio sostenibile da uno che, al
                  contrario, si nasconde dietro alla maschera del greenwashing?
                </p>
                <p className="mt-8">
                  <b>So What</b> ti svela il trucco tramite 5 consigli a prova
                  di greenwashing 😉
                </p>
                <b>1. Sostenibilità in divenire</b>

                <p>
                  Essere <b>100% green è impossibile!</b> C’è sempre qualcosa da
                  <b>migliorare e,</b> nonostante i grandissimi passi avanti in
                  ambito tecnologico, c’è ancora molta <b>strada da fare</b> per
                  produrre, vendere e recuperare capi di abbigliamento con un
                  <b> impatto pari a 0.</b>
                </p>
                <p>
                  Noi di So What ne siamo consapevoli e, per questo,{" "}
                  <b>giorno dopo giorno,</b> ci muoviamo sempre più verso un{" "}
                  <b> ecosistema totalmente sostenibile</b> e, per il
                  <b> 2024,</b> intendiamo <b>eliminare</b> l’utilizzo di
                  <b>materiali non riciclati</b> dalla produzione di capi.
                </p>
                <p>
                  Ce la stiamo mettendo tutta e, step by step,{" "}
                  <b>ce la faremo!</b>
                </p>
                <p>
                  <b>2. Bla bla bla, vogliamo le prove!</b>
                </p>
                <p>
                  I <b>brand</b> maestri di{" "}
                  <b>
                    <i>greenwashing </i>
                  </b>
                  sono dei gran <b>chiacchieroni</b> e tra uno <b>slogan,</b>{" "}
                  una campagna di <b>comunicazione</b> coi fiocchi e l’utilizzo
                  di una qualche <b>strategia di marketing,</b> riescono spesso
                  ad{" "}
                  <b>
                    <i>apparire green</i>
                  </b>{" "}
                  pur non essendolo affatto!
                </p>
                <p>
                  Si definiscono sostenibili perché hanno <b>una collezione,</b>{" "}
                  tra tutte, realizzata con <b>fibre riciclate</b> ma{" "}
                  <b>non forniscono informazioni</b> sulla percentuale di
                  utilizzo?
                </p>
                <p>
                  Hanno deciso di impegnarsi in una qualche
                  <b> attività di facciata</b>
                  di <b>beneficienza ambientale</b> e/o animale? Ovviamente,
                  questo senza mettere in discussione le dinamiche aziendali di
                  produzione interne.
                </p>
                <p>
                  Tutti questi sono chiari indizi di un
                  <b> greenwashing bello sfacciato!</b>
                </p>
                <p>
                  Per essere davvero sostenibili servono le
                  <b> prove e atti concreti;</b> spesso riassumili grazie
                  all’ottenimento di <b>certificazioni!</b>
                </p>
                <p>
                  <b>-CPSIA</b> per l’utilizzo di poliestere riciclato come
                  materiale di produzione;
                </p>
                <p>
                  <b>-GOTS</b> per l’utilizzo di <b>cotone bio;</b>
                </p>
                <p>
                  <b>-OEKO-TEX</b> circa l’impiego di{" "}
                  <b>inchiostri vegani, 100% biodegradabili,</b> a composizione
                  acquosa e <b> privi di tossine</b> nocive.
                </p>
                <b>3. Capi nuovi, materiali vecchi</b>
                <p>
                  Non si è mai del tutto sostenibili se non si{" "}
                  <b>utilizzano,</b> per quanto possibile,{" "}
                  <b>materiali riciclati.</b>
                </p>
                <p>
                  Come detto poc’anzi, i capi di <b>So What</b> sono realizzati
                  con
                  <b>materiali riciclati (plastica, poliestere…)</b> ed è nostra
                  prerogativa, dal 2024, eliminare dall’intera filiera di
                  produzione tutti quei materiali che non lo sono.
                </p>
                <b>4. I dipendenti sono importanti quanto i clienti</b>
                <p>
                  Un brand <b>sostenibile</b> lo è anche nei confronti dei
                  propri <b>lavoratori</b> e delle comunità locali in cui si
                  trovano i propri stabilimenti.
                </p>
                <p>
                  <b>So What</b> si impegna a{" "}
                  <b>rispettare i diritti dei lavoratori</b>
                  garantendo loro un{" "}
                  <b>equo compenso, orari di lavoro umani,</b> un ambiente di
                  lavoro in cui non soltanto vengano rispettati i
                  <b>protocolli</b> di sicurezza ma in cui ciascun dipendente
                  possa sentirsi libero di essere ed esprimere la propria
                  <b>individualità</b> non incappando in discriminazioni o
                  giudizi.
                </p>

                <button className="flex items-center text-center gap-2 border mt-8 rounded-full border-black py-2 px-4 text-lg font-medium">
                  <CiShare2 />
                  Share
                </button>
                <div className="text-red-600 gap-2 flex flex-wrap mt-8">
                  <p className="text-black">Field in: </p>
                  <div className="underline">
                    <Link href="#"> benessere</Link>,
                    <Link href="#"> biodegradabile</Link>,
                    <Link href="#"> cotone bio</Link>,
                    <Link href="#"> diritti lavoratori</Link>,
                    <Link href="#"> etica</Link>,
                    <Link href="#"> fast fashion</Link>,
                    <Link href="#"> greenwashing</Link>,
                    <Link href="#"> impatto 0</Link>,
                    <Link href="#"> materiali riciclati</Link>,
                    <Link href="#"> moda sostenibile</Link>
                  </div>
                  <hr className="border-1 my-8 border-black w-full"></hr>
                  <div className="flex items-end text-red-600 font-bold justify-end w-full mb-8">
                    <Link href="#">Next Article</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
