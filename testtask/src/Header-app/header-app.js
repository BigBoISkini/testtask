import './header-app.css';
import Button from 'react-bootstrap/Button';

const Header = () => {
    return(
        <div>
            <div className='menu'>
            <div className='menu__content'>

                <div  className='menu__column'>
                    <div className='menu__box__icon'></div>
                </div>

                <div className='menu__column'>
                    <div className='menu__box'>FAQ</div>
                    <div className='menu__box'>Оплата и доставка</div>
                    <div className='menu__box'>Возврат</div>
                    <div className='menu__box'>Исследования</div>
                    <div className='menu__box'>Личный кабинет</div>
                    <div className='menu__box'>8 8 (800) 600-09-90</div>
                </div>

                <div className='menu__column'>
                    <div  className='menu__box__basket'></div>
                    <div className='menu__circle'>1</div>
                </div>
            </div>
        </div>

            <div className='header'>
                <div className='header__text'>АКТИВИРУЙ ИММУНИТЕТ!</div>
                <div className='header__textmini'>
                Всего пять секунд в день помогут укрепить иммунитет 
                и повысить защитные силы организма
                </div>
                <div className='header__description'>
                    <div className='description__glav'>NOOTRIS ПОМОГАЕТ</div>
                    <div className='description__mini'>
                        Вашему организму во время пандемии 
                        и сезонных простуд
                        </div>
                </div>
                <div className='header__tablets'></div>
                <div className='header__ginger'></div>
                <div className='header__lemon'></div>
                <div className='header1'></div>
                <div className='header2'></div>
                <div className='header3'></div>
                <div className='header5'></div>
                <div className='header6'></div>
                <div className='header7'></div>
                <div className='header8'></div>
            </div>

            <div className='footer'>
                <div className='content'>
                    <div className='footer__text'>
                    ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА
                    <span>СО СКИДКОЙ -15% ПЕРВЫМ!</span>
                    </div>
                    <div className='footer__price'>
                        <div className='price1'>750₽</div>
                        <div className='price2'>690₽</div>
                    </div>


                    <div className='footer__down'>
                        <div className='footer__column'>
                            <div className='column__img'></div>
                            <div className='column__text'>
                            Содержит <span>имбирь</span></div>
                        </div>

                        <div className='footer__column'>
                            <div className='column__img nootris'></div>
                            <div className='column__text big'>
                            + Бесплатная доставка
                            <span className='price'>Специальная цена</span>
                            </div>
                        </div>

                        <div className='footer__column'>
                            <div className='column__img vorus'></div>
                            <div className='column__text'>
                            Нейтрализует 
                            <span>вирусы</span>
                            </div>
                        </div>
                    </div>

                    <Button variant="warning" className='button'>Оформить заказ!</Button>

                </div>
            </div>
        </div>
    )
}

export default Header;