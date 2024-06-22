// import React from 'react';
// import styled from 'styled-components';

// const Footer: React.FC = () => {
//     return (
//         <FooterContainer>
//             <FooterContent>
//                 <h3>İletişim</h3>
//                 <p>Email: info@example.com</p>
//                 <p>Telefon: +90 123 456 7890</p>
//                 <p>Adres: Örnek Mahallesi, İstanbul, Türkiye</p>
//             </FooterContent>
//         </FooterContainer>
//     );
// };

// const FooterContainer = styled.footer`
//   width: 100%;
//   background-color: #262626;
//   color: white;
//   padding: 20px 0;
//   text-align: center;
//   position: relative;
//   bottom: 0;
// `;

// const FooterContent = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 20px;

//   h3 {
//     margin-bottom: 10px;
//   }

//   p {
//     margin: 5px 0;
//   }
// `;

// export default Footer;


import React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <TopAndMiddleSection>
                <TopSection>
                    <LogoContainer>
                        <a aria-label="Anasayfa" href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1001 426" xmlSpace="preserve" width="56.39" height="24">
                                <path d="M191.1 292c-19.7 21.7-44.6 32.4-75 32.4-11.8 0-24.9-3.2-38.7-9.5s-24.1-15-30.8-26v32.4H.9V0h47v141.6c6.7-11.1 16.6-19.7 30.4-25.7 13.8-6.3 26.8-9.5 39.1-9.5 30.8 0 55.6 11.1 74.6 33.1 19.3 22.1 28.8 47.4 28.8 75.4-.1 29.7-9.9 55.4-29.7 77.1zm-144-76.6c0 18.5 5.9 34.3 17.4 47.4 11.8 12.6 27.2 18.9 45.8 18.9 18.5 0 33.9-6.3 45.4-18.9 11.8-13 17.8-28.8 17.8-47.4s-5.9-34.3-17.8-47.4c-11.4-13-26.8-19.3-45.4-19.3-18.6 0-33.9 6.3-45.8 19.3-11.5 13.1-17.4 28.9-17.4 47.4zM295.7 229.6c.4 15.8 6.7 28.8 18.9 39.5 12.2 10.3 26.4 15.4 42.6 15.4 26.4 0 45.4-11 56.8-32.8l33.9 22.5c-17.8 32.8-52.1 50.9-90 50.9-31.2 0-57.6-10.3-78.9-31.2-20.9-20.9-31.6-47.4-31.6-78.5 0-30.4 10.3-56 30.4-77.3s45.4-32 75.8-32c32 0 57.2 9.9 75.4 30 18.1 20.1 27.2 46.2 27.2 78.9 0 6.3-.4 11.1-.8 14.6H295.7zm2.3-35.5h110.5c-1.6-29.6-24.9-47.7-54.8-47.7-28.8 0-51.3 18.9-55.7 47.7zM498.1 20.5c12.2-12.6 31.2-12.6 43.4 0 12.2 12.2 12.2 31.2 0 43.4s-31.2 12.2-43.4 0c-12.3-12.2-12.3-31.1 0-43.4zm45.3 300.7h-47V110.5h47v210.7zM648.4 110.5V346c0 53.3-25.7 79.7-76.5 79.7-7.5 0-14.6-1.2-21.3-3.2v-41c3.5 1.2 7.5 1.6 11.8 1.6 28 0 38.7-10.7 38.7-42.2V110.5h47.3zm7.5-68.3c0 17-14.2 30.8-31.6 30.8-17 0-30.8-13.8-30.8-30.8S607.3 11 624.3 11c17.4.1 31.6 14.2 31.6 31.2zM737.2 229.6c.4 15.8 6.7 28.8 18.9 39.5 12.2 10.3 26.4 15.4 42.6 15.4 26.4 0 45.4-11 56.8-32.8l33.9 22.5c-17.8 32.8-52.1 50.9-90 50.9-31.2 0-57.6-10.3-78.9-31.2-20.8-20.9-31.5-47.3-31.5-78.5 0-30.4 10.3-56 30.4-77.3s45.4-32 75.8-32c32 0 57.2 9.9 75.4 30 18.2 20.1 27.2 46.2 27.2 78.9 0 6.3-.4 11.1-.8 14.6H737.2zm2.3-35.5H850c-1.6-29.6-24.9-47.7-54.8-47.7-28.9 0-51.3 18.9-55.7 47.7z" style={{ fill: 'rgb(255, 255, 255)' }}></path>
                                <path d="M1001 291.4c0 9-6.9 15.7-12.8 21.6-5.9 5.9-12.6 10.8-21.7 10.8s-15.1-5.5-21-11.5c-5.9-5.9-10-12-10-21s-.7-19.8 5.3-25.7c5.9-5.9 16.7-9.1 25.7-9.1s17.2 5.8 23.1 11.8c5.9 5.9 11.4 14 11.4 23.1z" style={{ fill: 'rgb(255, 255, 255)' }}></path>
                            </svg>
                        </a>
                    </LogoContainer>
                    <Newsletter>
                        <h3>Arayı açmayalım!</h3>
                        <p>beije’deki yeni ürün ve gelişmeleri sana haber verelim & aylık e-gazetemiz döngü’ye abone ol!</p>
                        <FormContainer>
                            <form>
                                <InputContainer>
                                    <label htmlFor="email">e-mail adresin</label>
                                    <input type="email" id="email" name="email" placeholder="halide.edip@adivar.com" />
                                </InputContainer>
                                <SubmitButton type="submit">Gönder</SubmitButton>
                            </form>
                        </FormContainer>
                        <SubscriptionInfo>Abone olarak, beije KVKK ve Gizlilik Politikası'nı kabul ediyor ve beije'den haber almayı onaylıyorum.</SubscriptionInfo>
                    </Newsletter>
                </TopSection>
                <MiddleSection>
                    <FooterLinkColumn>
                        <FooterLink href="#">beije Ped</FooterLink>
                        <FooterLink href="#">beije Günlük Ped</FooterLink>
                        <FooterLink href="#">beije Tampon</FooterLink>
                        <FooterLink href="#">beije Store</FooterLink>
                    </FooterLinkColumn>
                    <FooterLinkColumn>
                        <FooterLink href="#">Blog</FooterLink>
                        <FooterLink href="#">Sıkça Sorulan Sorular</FooterLink>
                        <FooterLink href="#">Biz Kimiz?</FooterLink>
                        <FooterLink href="#">Quiz</FooterLink>
                    </FooterLinkColumn>
                    <FooterLinkColumn>
                        <FooterLink href="#">Facebook</FooterLink>
                        <FooterLink href="#">Instagram</FooterLink>
                        <FooterLink href="#">Twitter</FooterLink>
                        <FooterLink href="#">LinkedIn</FooterLink>
                        <FooterLink href="#">Spotify</FooterLink>
                    </FooterLinkColumn>
                </MiddleSection>
            </TopAndMiddleSection>
            <BottomSection>
                <FooterLinks>
                    <FooterLink href="#">2024 beije. Tüm hakları saklıdır.</FooterLink>
                    <FooterLink href="#">KVKK</FooterLink>
                    <FooterLink href="#">KVKK Başvuru Formu</FooterLink>
                    <FooterLink href="#">Üyelik Sözleşmesi</FooterLink>
                    <FooterLink href="#">Gizlilik Politikası</FooterLink>
                    <FooterLink href="#">Çerez Politikası</FooterLink>
                    <FooterLink href="#">Test Sonuçları</FooterLink>
                    <LanguageSelector>
                        <span>EN</span>
                        <span>|</span>
                        <span>TR</span>
                    </LanguageSelector>
                </FooterLinks>
            </BottomSection>
        </FooterContainer>
    );
};

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #262626;
  color: white;
  padding: 20px 0;
  text-align: center;
  position: relative;
  bottom: 0;
`;

const TopAndMiddleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const TopSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const LogoContainer = styled.div`
  margin-bottom: 20px;
`;

const Newsletter = styled.div`
  text-align: center;
  width: 100%;
  max-width: 600px;

  h3 {
    margin-bottom: 10px;
  }

  p {
    margin: 5px 0;
  }
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  form {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  label {
    font-size: 14px;
  }

  input {
    padding: 10px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    font-size: 14px;
    background-color:#262626;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #f7f3f0;
  color: 262626;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
`;

const SubscriptionInfo = styled.p`
  font-size: 14px;
  color: #999;
  margin-top: 10px;
`;

const MiddleSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  padding: 20px;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const FooterLinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 20px;
  }
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 14px;
  line-height: 120%;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
  }
`;

const BottomSection = styled.div`
  border-top: 1px solid #444;
  padding-top: 20px;

`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LanguageSelector = styled.div`
  display: flex;
  gap: 5px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export default Footer;

