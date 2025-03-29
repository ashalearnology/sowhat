/** @format */

'use client';
import { CiShare2 } from 'react-icons/ci';
import Link from 'next/link';

export default function Shop() {
  return (
    <div>
      <div className="px-20 max-sm:px-4 max-lg:px-10  max-xl:px-24 max-2xl:px-0">
        <div className="flex w-full text-center">
          <div className="px-72 max-xl:px-0 max-2xl:px-54 items-center justify-center">
            <div className="px-36 max-xl:px-0 max-2xl:px-20">
              <p className="font-medium py-2">July 11, 2023</p>

              <p className="text-4xl font-medium font-serif ">
              Come scegliere il giusto{' '}
              </p>
              <p className="text-4xl font-medium  font-serif">
              abbigliamento sportivo,
              </p>
              <p className="text-4xl font-medium  font-serif">
              tra materiali tecnici e
              </p>
              <p className="text-4xl font-medium  font-serif">
              sostenibilità!
              </p>
              <span className="font-medium mt-2">Ilaria Bonini</span>
              <div className="w-full my-8 flex justify-center">
                <button className="flex items-center text-center gap-2 border border-gray-400 rounded-full py-2 px-4 text-lg font-medium">
                  <CiShare2 />
                  Share
                </button>
              </div>
            </div>
            <img src="/images/readmore4/image1.webp" alt="image" className="px-0" />
            <div className="px-32 max-md:px-0 max-lg:px-20 max-2xl:px-20 font-serif">
              <p className="py-8 uppercase text-4xl max-sm:text-2xl font-medium">
              Come scegliere il giusto abbigliamento sportivo,tra materiali tecnici e sostenibilità!
              </p>
              <div className="text-start font-medium">
                <h6>
                    <b>
                    Comfort e performance vanno a braccetto quando si parla di abbigliamento sportivo realizzato con materiali di qualità. Sapere scegliere il giusto activewear fa bene non soltanto a te ma anche al Pianeta!
                    Fare sport non ha stagione
                    </b>
                    ma muoversi <b> d’estate è </b>davvero <b>difficile 😅  </b>         
                    Se in primavera capitava di incappare in qualche jogger durante la pausa pranzo, oggi se ne vedono molti meno in giro! La corsetta pomeridiana è stata sostituita a una rilassante passeggiata serale; decisamente più fresca!
                    Se fare sport è <b>più complicato d’estate</b> ecco che invece scegliere il <b>giusto abbigliamento sportivo non lo è affatto,</b> grazie all’aiuto di <b>So What!</b>Se <b> comfort</b>è sinonimo di <b>performance</b>cco che anche i <b>materiali</b>giocano un ruolo importantissimo per quanto riguarda <b>impermeabilità, resistenza, traspirazione e assorbimento del sudore.</b>
                </h6>
                <h6 className="pt-8">
                    <p className='text-2xl'>
                    L’ABC per acquistare capi sportivi
                    </p>
                    La giusta taglia 
                </h6> 
                <h5 className="pt-3">
                Affinché un capo vesta in maniera confortevole deve <b> adattarsi e prendere la forma del corpo.</b>
                Non deve essere né largo né stretto altrimenti i <b>movimenti</b> risulterebbero <b>limitati e </b> il <b>respiro compresso.</b>
                Prima di acquistare o confermare l’acquisto di un capo, è sempre  <b>meglio provarlo prima</b> facendo qualche stiramento, saltino o una veloce corsetta per verificare che non solo si adatti al corpo ma anche all’attività fisica svolta;
                </h5>   
                <h5 className="pt-6">
                <p className='text-2xl'>
                    Design e styling del prodotto
                    </p>
                </h5>
                <h5 className="pt-3">
                Capi larghi e comodi sono perfetti per una tipologia di allenamento ma meno per un’altra.
                Fare <b>jogging</b>e <b>spinning</b>sono due tra le attività in cui è maggiormente <b>sconsigliato</b> l’utilizzo di  <b>capi di abbigliamento larghi e a manica lunga.</b> il tessuto rischierebbe infatti di incastrarsi tra i pedali o finire sotto i piedi e questo farebbe terminare l’allenamento prima del previsto 😅
                Per attività fisica quale <b>yoga, pilates</b> e allenamenti ad <b>alta intensità</b>sono indicati capi tecnici sì, anche a manica lunga, ma soprattutto <b>aderenti</b> e capaci di <b>seguire i movimenti del corpo e drenare il sudore.</b>
                </h5>  
                <h5 className="pt-8">
                    <p className='text-2xl'>Durabilità e qualità del tessuto
                    </p>
                </h5>
                <h5 className='pt-3'>
                <b>Fibre di alta qualità </b> sono in grado di garantire una maggiore <b>resistenza all’usura</b> (data dai frequenti lavaggi e dai movimenti), alla <b>lacerazione</b>e ai <b>processi di invecchiamento.</b>
                </h5>
                <h5 className="mt-4">
                Ma capiamo insieme quali sono i <b> materiali</b>dalla <b>qualità migliore</b> e anche i più <b>sostenibili,</b>
                per svolgere al meglio il tuo allenamento estivo 😉
                L’abbigliamento sportivo deve offrire un’ <b>un’ampia gamma di movimento</b>garantendo <b> flessibilità e comfort.</b>
                I materiali migliori per svolgere attività fisica sono <b>resistenti, traspiranti</b>e aiutano nella <b>mobilità assorbendo l’umidità.</b>

                Noi di <b>So What</b>abbiamo a cuore la tua salute fisica e mentale e anche quella del nostro Pianeta; ed è per questo che il materiale tecnico e performante da noi preferito è:
                </h5>
                <h5 className='pt-8'>
                    <p className='text-2xl'>
                    Poliestere riciclato
                    </p> 
                </h5>
                <h5 className='pt-3'>
                Il <b>poliestere riciclato,</b>noto anche come <b>rPET</b>, è una <b>fibra plastica</b>ricavata da
                    <b>vecchie bottiglie, vestiti usati, rifiuti di plastica </b>raccolti dagli oceani e dalle discariche.
                    Come sappiamo, la plastica non è un materiale sostenibile, ed è per questo che noi di So What utilizziamo
                    <b>solo poliestere riciclato e,</b>
                    <Link href="#" className="text-red-500 font-bold underline">
                    per il 2024, intendiamo utilizzare soltanto materiali di riuso, 
                  </Link> 
                  salutando così per sempre l’impiego di materie prime vergini.
                  Il <b>poliestere riciclato</b>è, ad ora, tra i materiali di abbigliamento migliori in quanto è <b> traspirante, resistente e leggero.</b>Segnali positivi circa l’impiego di questo materiale nell’industria della moda indicano che il poliestere riciclato faccia <b> risparmiare</b>l’impiego di circa la <b>metà dell’energia </b>
                  utilizzata nella produzione di materiali di abbigliamento.
                    Inoltre, le <b>emissioni di carbonio</b>sono <b>ridotte </b>di circa il <b>60%.</b>
                    I contro? L’impiego di poliestere riciclato ha un <b>costo maggiore </b>
                    rispetto all’impiego di fibre plastiche vergini ma, con il tempo e il suo sempre maggiore utilizzo, diventerà più economico e alla portata di tutti 😊
                </h5>
                <h5 className='pt-8'>
                    <p className='text-2xl'>
                    Nylon ed Econyl
                    </p> 
                </h5>
                <h5 className='pt-3'>
                Il <b>nylon</b>è una <b>
                fibra sintetica derivata dalla plastica
                </b>e si distingue dal poliestere per la modalità di combustione attraverso la quale viene prodotto.
                    E’ la fibra preferita da tutti quegli sportivi che svolgono <b>attività ad alta intensità </b>
                    e necessitano di tessuti dalla <b>forte elasticità.</b>Questo materiale accompagna il corpo in ogni suo movimento per poi ritornare alla sua forma originaria.
                    <b>Assorbe l’umidità</b> e fa velocemente <b>evaporare il sudore</b> dalla pelle regalando un allenamento a prova di alone.
                    Il nylon è infatti <b>idrofobo</b> e, per questa ragione, invece di assorbire le molecole dell’acqua <b>assorbe l’umidità dalla pelle.</b>La sua <b> versione sostenibile? L’econyl! </b>
                    L’econyl viene ricavato dal <b>riutilizzo</b> di <b>plastica industriale</b>, reti da pesca ecc.
                    L’econyl è meno diffuso del poliestere riciclato ma con il tempo saranno entrambi largamente impiegati!
                </h5>
                <h5 className='pt-8'>
                    <p className='text-2xl'>
                    Tencel
                    </p> 
                </h5>
                <h5 className='pt-3'>
                Il <b>tencel</b> o meglio tencel lyocel, è una <b>fibra cellulosa </b>che si ricava dai <b>truccioli del legno.</b>
                Viene <b>miscelato con altri materiali</b> che donano ad esso una maggiore <b>resistenza, morbidezza</b> e capacità di <b> assorbimento dell’umidità.</b>
                Il suo impiego rimane ancora marginale ma grazie al miglioramento della filiera del riciclo verrà sempre più ricavato dai molti materiali in legno scartati in tutto il mondo.
                </h5>

                <h5 className='pt-8'>
                    <p className='text-2xl'>
                    Bambù
                    </p> 
                </h5>
                <h5 className='pt-3'>
                Il <b>materiale del futuro</b> è il <b> bambù!</b>
                La fibra del bambù è ricavata dallo stelo di questa pianta sempreverde proveniente dall’Oriente
                Il <b>tessuto in fibra di bambù</b>, grazie alle tipiche <b>micro fessure</b> della pianta, è <b>morbidissimo</b>; addirittura più morbido del cotone stesso!
                E’ inoltre in grado di <b>assorbire il sudore</b> e, grazie alla proprietà <b>antimicrobica</b>, è un materiale <b>perfetto per chi fa sport</b> in quanto non vi proliferano batteri.
                E’ resistente e offre <b>grande elasticità </b> rendendolo perfetto anche per gli <b>sport</b> più <b>intensi!</b>
                </h5>
                
                <h5 className='pt-3'>
                Se ad oggi non esiste un ecosistema moda 100% sostenibile, si stanno muovendo <b>sempre più passi verso la riduzione dello spreco di risorse e energie</b> impiegate nel processo di produzione, così come si stanno utilizzando sempre più
                <b> materiali sostenibili e riciclati.</b>
                Per questa ragione, noi di So What siamo orgogliosi della nostra <b>collezione activewear</b><Link href="#" className="text-red-500 font-bold underline">
                The Black Edit, 
                  </Link>  realizzata con la collaborazione di <b>Allyoucanfit.
                    Pensata per tutti i corpi</b> realizzata con <b>poliestere riciclato, inchiostro vegano, 100% biodegradabile e a base acquosa</b>combatte anche la produzione eccessiva di abbigliamento grazie a una <b>produzione</b>che avviene soltanto <b>dopo la ricezione dell’ordine.</b>
                    Muoviti con gioia sapendo di  <b>fare bene a te stess* </b>e al <b>Pianeta!</b>
                </h5>
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
                  <div className="flex justify-between text-red-600 font-bold w-full mb-8">
                    <Link href="#">Previous Article</Link>
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
