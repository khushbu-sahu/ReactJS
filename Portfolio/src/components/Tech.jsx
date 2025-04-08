import React from 'react'
import { RiReactjsFill, RiNodejsFill } from 'react-icons/ri'
import { SiMongodb, SiExpress } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { animate, motion } from "framer-motion"

const IconVariant = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            easy: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }

    }
})

const Tech = () => {
    return (
        <div className='border-b border-neutral-900 pb-24'>
            <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y:-100 }} transition={{ duration: 0.4, delay: 0.5 }} className="my-20 text-center text-4xl">Technologies</motion.h1>

            <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.div variants={IconVariant(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiJavascript className='text-7xl text-yellow-500' />
                </motion.div>
                <motion.div variants={IconVariant(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiNodejsFill className='text-7xl text-green-400' />
                </motion.div>
                <motion.div variants={IconVariant(9)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className='text-7xl text-green-800' />
                </motion.div>
                <motion.div variants={IconVariant(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiExpress className='text-7xl text-yellow-300' />
                </motion.div>
                <motion.div variants={IconVariant(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsFill className='text-7xl text-blue-500' />

                </motion.div>
            </div>

        </div>
    )
}

export default Tech
