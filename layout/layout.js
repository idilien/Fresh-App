
import Head from 'next/head'
import Modal from 'react-modal'
import { ToastContainer } from 'react-toastify';

import ModalProduct from '../components/ModalProduct';
import Sidebar from '../components/Sidebar'
import Steps from '../components/Steps';
import useRestaurant from '../hooks/useRestaurant';

import 'react-toastify/dist/ReactToastify.css';


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

export default function Layout ({children, page}) {

const {modal} =  useRestaurant()

  return (
    <> 
            <Head>
                <title>Fenicia- {page}</title>
                <meta name='description' content='Lybanes'/> 
            </Head>
            <div className='container m-auto'>
              <div className='md:flex'>
                      <aside className='md:w-4/12 xl:w-1/4 2xl:w-1/5'>
                          <Sidebar/>
                      </aside>
                      <main className='md-w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-auto'>
                            <Steps/>
                          <h1 className= "mt-7 text-5xl text-center font-black text-red-900">Pedidos Online</h1>
                          <div className=' p-6 text-center'>
                            {children}
                          </div>                
                      </main>
              </div>
              {modal && (
                <Modal
                  isOpen={modal}
                  style={customStyles}
                >
                  <ModalProduct/>

                </Modal>
              )}
            </div>
                <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                />
    </>
  )
}
