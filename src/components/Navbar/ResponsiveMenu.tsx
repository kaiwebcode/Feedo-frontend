import { motion, AnimatePresence } from 'framer-motion'
import { NavbarMenu } from './data'
import { Divider } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const ResponsiveMenu = ({ open, setOpen }: { open: boolean, setOpen: (val: boolean) => void }) => {
     const navigate = useNavigate()
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="fixed top-0 left-0 w-full h-screen z-40 bg-black/60 backdrop-blur-xl"
                >
                    {/* Content Container */}
                    <div className="flex flex-col justify-between h-full py-10 px-6 ">
                        {/* Navigation Links */}
                        <ul className="flex flex-col gap-8 text-xl font-semibold uppercase text-white tracking-wide mt-20">
                            {NavbarMenu.map((item) => (
                                <motion.li
                                    key={item.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.05 * item.id, duration: 0.3 }}
                                >
                                    <a
                                        href={item.link}
                                        onClick={() => setOpen(false)}
                                        className="hover:text-sky-400 transition-colors duration-200"
                                    >
                                        {item.title}
                                    </a>
                                    {/* <br /> */}
                                    <Divider className='bg-slate-500' />
                                </motion.li>
                            ))}
                        </ul>

                        {/* Close Button at Bottom */}
                        <div className="flex flex-col gap-4 justify-center">
                            <button 
                            onClick={() => {
                                    setOpen(false)
                                    navigate('/login')
                                }}
                            className="px-6 py-2 rounded-full border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-black transition duration-200">
                                Login
                            </button>
                            <button
                                  onClick={() => {
                                    setOpen(false)
                                    navigate('/signup')
                                }}
                                className="px-6 py-2 rounded-full border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-black transition duration-200"
                            >
                               Sign up
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ResponsiveMenu
