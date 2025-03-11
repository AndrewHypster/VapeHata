import Alert from "@/components/alert/alert"
import Card from "@/components/cards/card"
import Header from "@/components/header/header"
import Sidebar from "@/components/sidebar/sidebar"
import Slider from "@/components/slider/slider"
import Image from "next/image"
import './page.css'

const Main = () => {
  return (
    <>
      <Alert text='Товар успішно додано в кошик!' type='success'/>
      <Header />
      <Sidebar />
      <main className="main-sec">
        <div className="main-text">
          <h1 className="main-title">Твій дім<br />смачного пару</h1>
          <p className="main-desc">Тільки кращі девайси та рідини<br/>за приємно низькими цінами</p>
        </div>
        <Image src='./icons/logo.svg' width={100} height={100} alt='лого Vape Shop Хата' className="main-img" />
      </main>
      
      <Slider bg='black' title='Новинки' n={4}>
        <Card type='new' kind='под' name="Voparesso Xros 4 Pro" price={300} link='/pod/1' img='https://tipok.com.ua/sites/default/files/styles/510x485/public/product_images/dizayn-bez-nazvi-66_1.png.webp?itok=WJPXAs7w' />
        <Card type='new' kind='под' name="Voparesso Xros 4 Pro" price={300} link='/pod/1' img='https://tipok.com.ua/sites/default/files/styles/510x485/public/product_images/dizayn-bez-nazvi-66_1.png.webp?itok=WJPXAs7w' />
        <Card type='new' kind='под' name="Voparesso Xros 4 Pro" price={300} link='/pod/1' img='https://tipok.com.ua/sites/default/files/styles/510x485/public/product_images/dizayn-bez-nazvi-66_1.png.webp?itok=WJPXAs7w' />
        <Card type='new' kind='под' name="Voparesso Xros 4 Pro" price={300} link='/pod/1' img='https://tipok.com.ua/sites/default/files/styles/510x485/public/product_images/dizayn-bez-nazvi-66_1.png.webp?itok=WJPXAs7w' />
        <Card type='new' kind='под' name="Voparesso Xros 4 Pro" price={300} link='/pod/1' img='https://tipok.com.ua/sites/default/files/styles/510x485/public/product_images/dizayn-bez-nazvi-66_1.png.webp?itok=WJPXAs7w' />
        <Card type='new' kind='под' name="Voparesso Xros 4 Pro" price={300} link='/pod/1' img='https://tipok.com.ua/sites/default/files/styles/510x485/public/product_images/dizayn-bez-nazvi-66_1.png.webp?itok=WJPXAs7w' />
        <Card type='new' kind='под' name="Voparesso Xros 4 Pro" price={300} link='/pod/1' img='https://tipok.com.ua/sites/default/files/styles/510x485/public/product_images/dizayn-bez-nazvi-66_1.png.webp?itok=WJPXAs7w' />
        <Card type='new' kind='под' name="Voparesso Xros 4 Pro" price={300} link='/pod/1' img='https://tipok.com.ua/sites/default/files/styles/510x485/public/product_images/dizayn-bez-nazvi-66_1.png.webp?itok=WJPXAs7w' />
        <Card type='new' kind='под' name="Voparesso Xros 4 Pro" price={300} link='/pod/1' img='https://tipok.com.ua/sites/default/files/styles/510x485/public/product_images/dizayn-bez-nazvi-66_1.png.webp?itok=WJPXAs7w' />
        <Card type='new' kind='под' name="Voparesso Xros 4 Pro" price={300} link='/pod/1' img='https://tipok.com.ua/sites/default/files/styles/510x485/public/product_images/dizayn-bez-nazvi-66_1.png.webp?itok=WJPXAs7w' />
        <Card type='new' kind='под' name="Voparesso Xros 4 Pro" price={300} link='/pod/1' img='https://tipok.com.ua/sites/default/files/styles/510x485/public/product_images/dizayn-bez-nazvi-66_1.png.webp?itok=WJPXAs7w' />
        <Card type='new' kind='под' name="Voparesso Xros 4 Pro" price={300} link='/pod/1' img='https://tipok.com.ua/sites/default/files/styles/510x485/public/product_images/dizayn-bez-nazvi-66_1.png.webp?itok=WJPXAs7w' />
        <Card type='new' kind='под' name="Voparesso Xros 4 Pro" price={300} link='/pod/1' img='https://tipok.com.ua/sites/default/files/styles/510x485/public/product_images/dizayn-bez-nazvi-66_1.png.webp?itok=WJPXAs7w' />
        <Card type='new' kind='под' name="Voparesso Xros 4 Pro" price={300} link='/pod/1' img='https://tipok.com.ua/sites/default/files/styles/510x485/public/product_images/dizayn-bez-nazvi-66_1.png.webp?itok=WJPXAs7w' />
      </Slider>
    </>
  )
}

export default Main
