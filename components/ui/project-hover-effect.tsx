import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'



export const ProjectHoverEffect = ({
  items,
  className,
}: {
  items: {
    name?: string;
    description?: string;
    pdf?: string
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  let [isOpen, setIsOpen] = useState(false);
  let [item, setItem] = useState<{ name?: string; description?: string; pdf?:string }>({});

  function open(item: {name?: string; description?: string; pdf?:string }) {
    setIsOpen(true);
    setItem(item);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.name}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-blue-900/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle className="mb-10">{item.name}</CardTitle>
            <Button
               onClick={() => open(item)}
              className="rounded-2xl flex mx-auto bg-white py-2 px-4 text-sm font-medium text-black focus:outline-none data-[hover]:bg-white/70 data-[focus]:outline-1 data-[focus]:outline-white"
            >
              Details
            </Button>
          </Card>
        </div>
      ))}

      <Dialog open={isOpen} as="div" className="relative z-50 focus:outline-none " onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-xl ring-2 ring-white rounded-xl bg-white/10  backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
            
              {item.description !== '' ? (
                  <>
                  <DialogTitle as="h3" className="text-base/7 px-6 py-3 font-medium text-white">
                    {item.name}
                  </DialogTitle>
                  <p className="mt-2 text-sm/6 text-white/50 px-6 py-3">
                    {item.description}
                  </p>
                  </>
                ) : (
                  <iframe src={item.pdf} 
                    className="w-full h-96 p-2 border border-gray-300 rounded-lg"
                    frameBorder={0}
                    allowFullScreen
                    />
                )}
            
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};


export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h3 className={cn("text-zinc-100 font-bold tracking-wide mt-2 text-center uppercase", className)}>
      {children}
    </h3>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </div>
  );
};
