import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../src/store';
import { addSelection, removeSelection } from '../src/store/slice';
import styled from 'styled-components';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

const CustomPackage: React.FC = () => {
  const dispatch = useDispatch();
  const selections = useSelector((state: RootState) => state.customPackage.selections);

  const [standardPed, setStandardPed] = useState(0);
  const [superPed, setSuperPed] = useState(0);
  const [gecePed, setGecePed] = useState(0);

  const handleAdd = (item: string) => {
    dispatch(addSelection(item));
  };

  const handleSliderChange = (setter: React.Dispatch<React.SetStateAction<number>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(parseInt(e.target.value, 10));
  };

  const totalSelected = standardPed + superPed + gecePed;

  const selectedItemsText = () => {
    const items = [];
    if (standardPed > 0) items.push(`${standardPed} Standart Ped`);
    if (superPed > 0) items.push(`${superPed} Süper Ped`);
    if (gecePed > 0) items.push(`${gecePed} Gece Ped`);
    return items.join(' ve ');
  };

  return (
    <div>
      <Container>
        <NavBar />

        <ContentWrapper>
          <LeftPane>
            <Header>
              <h1>Kendi Paketini Oluştur</h1>
              <p>Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve miktarlardan, sana özel bir paket oluşturalım.</p>
            </Header>
            <Tabs>
              <Tab>beije Ped</Tab>
              <Tab>beije Günlük Ped</Tab>
              <Tab>beije Tampon</Tab>
            </Tabs>
            <Content>
              <SliderContainer>
                <label>Standart Ped</label>
                <Slider
                  type="range"
                  min="0"
                  max="60"
                  step="10"
                  value={standardPed}
                  onChange={handleSliderChange(setStandardPed)}
                />
                <SliderValues>
                  <span>0</span>
                  <span>60</span>
                </SliderValues>
              </SliderContainer>
              <SliderContainer>
                <label>Süper Ped</label>
                <Slider
                  type="range"
                  min="0"
                  max="60"
                  step="10"
                  value={superPed}
                  onChange={handleSliderChange(setSuperPed)}
                />
                <SliderValues>
                  <span>0</span>
                  <span>60</span>
                </SliderValues>
              </SliderContainer>
              <SliderContainer>
                <label>Gece Ped</label>
                <Slider
                  type="range"
                  min="0"
                  max="60"
                  step="10"
                  value={gecePed}
                  onChange={handleSliderChange(setGecePed)}
                />
                <SliderValues>
                  <span>0</span>
                  <span>60</span>
                </SliderValues>
              </SliderContainer>
            </Content>
          </LeftPane>
          <RightPane>
            <PackageBox>
              <h2>Özel Paketin</h2>
              <Frequency>2 ayda 1 gönderim</Frequency>
              <PackageImage src="/packet.webp" alt="Packet Image" />
              <SelectedItems>
                {selectedItemsText() ? `${selectedItemsText()} sepette` : ''}
              </SelectedItems>
              <AddButton
                onClick={() => handleAdd('Sample Item')}
                disabled={totalSelected === 0}
                totalSelected={totalSelected}
              >
                Sepete Ekle (₺0,00)
              </AddButton>
            </PackageBox>
          </RightPane>
        </ContentWrapper>

      </Container>
      <Footer />
    </div>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  margin-top: 70px; /* Adjust if necessary to avoid overlap with fixed navbar */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftPane = styled.div`
  flex: 1;
  padding: 20px;
`;

const RightPane = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const PackageBox = styled.div`
  background: #fff;
  border: 1px solid #e0e0e0;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

const Header = styled.header`
  text-align: left;
  margin-bottom: 20px;

  h1 {
    font-size: 1.5em;
  }

  p {
    font-size: 1em;
    color: #666;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.2em;
    }

    p {
      font-size: 0.9em;
    }
  }
`;

const Tabs = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Tab = styled.button`
  margin: 0 10px;
  padding: 10px 20px;
  border: none;
  border-bottom: 2px solid black;
  background: none;
  cursor: pointer;

  @media (max-width: 768px) {
    margin: 5px 10px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const SliderContainer = styled.div`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  label {
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Slider = styled.input`
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
  height: 8px;
  background: #e0e0e0;
  border-radius: 5px;
  outline: none;
  position: relative;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: #000;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    z-index: 2;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: #000;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    z-index: 2;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 4px;
    background: #e0e0e0;
    z-index: 1;
    transform: translateY(-50%);
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 10%;
    right: 10%;
    height: 4px;
    background: #e0e0e0;
    z-index: 1;
    transform: translateY(-50%);
    background: linear-gradient(to right, #e0e0e0 10%, transparent 0%);
    background-size: 10% 100%;
    background-repeat: repeat-x;
  }
`;

const SliderValues = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 5px;
  font-size: 0.9em;
`;

const SelectedItems = styled.div`
  margin-top: 20px;
  font-size: 1em;
  color: #333;
`;

const PackageImage = styled.img`
  max-width: 100%;
  height: auto;
  margin: 20px 0;
`;

const AddButton = styled.button<{ totalSelected: number }>`
  padding: 10px 20px;
  border: none;
  background-color: ${({ totalSelected }) => (totalSelected === 0 ? '#e0e0e0' : '#262626')};
  color: white;
  font-size: 1em;
  cursor: pointer;
  margin-top: 20px;
  width: 100%;
  &:disabled {
    cursor: not-allowed;
  }
`;

const Frequency = styled.div`
  margin: 10px 0;
  font-size: 1em;
  color: #666;
`;

export default CustomPackage;
