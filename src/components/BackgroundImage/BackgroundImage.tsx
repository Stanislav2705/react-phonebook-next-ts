import Image from "next/image";

const BackgroundImage = () => {
    return (
        <div style={{ position: 'relative', width: '1280', height: '720' }}>
        <Image
            src="/phonebook.jpg"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
        />
        </div>
    );
};

export default BackgroundImage