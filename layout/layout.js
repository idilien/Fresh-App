import Head from "next/head"
import Modal from "react-modal"
import { ToastContainer } from "react-toastify";
import ModalProductos from "../components/modalProductos";
import Siderbar from "../components/Siderbar"
import useQuiosco from "../hooks/useQuiosco";
import 'react-toastify/dist/ReactToastify.css';
import Pasos from "../components/Pasos";


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#__next');

export default function Layout({children,pagina}) {

  const {modal}= useQuiosco()

    return (
      <>
        <Head>
                <title>Fresh - {pagina}</title>
                <meta name="description" content="Quiosco Cafetería"/>
        </Head>

        <div className="md:flex">
            <aside className="w-full md:w-4/12 xl:w-1/4 2xl:w-1/5">
            <div className="mt-10 mx-5">
                   <Siderbar/>
            </div>
            </aside>
            <main className="md:w-8/12 xl:w-3/4 h-screen overflow-y-scroll">
              <div className=" mt-2">
                  <Pasos/>
                   {children}
              </div>
            </main>
        </div>
        {modal && (
          <Modal
            isOpen={modal}
            style={customStyles}
          >
            <ModalProductos/>
          </Modal>
        )}

        <ToastContainer/>
      </>
      
    )
  }