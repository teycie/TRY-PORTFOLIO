import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
`;

export const Section = styled.section`
  padding: 80px 20px;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }

  @media (max-width: 480px) {
    padding: 40px 20px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  color: var(--primary-lilac);
  margin-bottom: 3rem;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, var(--accent-purple), var(--primary-lilac));
    margin: 20px auto 0;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-light);
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  padding: 12px 32px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: var(--primary-lilac);
  color: white;
  box-shadow: var(--shadow-md);

  &:hover {
    background-color: var(--dark-lilac);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }

  &:focus {
    outline: 3px solid var(--accent-purple);
    outline-offset: 2px;
    box-shadow: var(--shadow-lg);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 480px) {
    padding: 10px 24px;
    font-size: 0.95rem;
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: var(--primary-lilac);
  border: 2px solid var(--primary-lilac);

  &:hover {
    background-color: var(--very-light-lilac);
    border-color: var(--dark-lilac);
  }

  &:focus {
    outline: 3px solid var(--accent-purple);
    outline-offset: 2px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;
