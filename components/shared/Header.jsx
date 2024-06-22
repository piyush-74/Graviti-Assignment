import Image from "next/image";

const Header = () => {
    return (
        <header className="border-b shadow-md mb-[3px] bg-white px-8 py-2">
            <div className="p-1">
                <Image className="w-[80px] md:w-[160px]" src="/gravity.svg" alt="gravity" width={160} height={80} 
                    priority
                    style={{ width: 'auto', height: 'auto' }}
                />
            </div>
        </header>
    );
}

export default Header;
