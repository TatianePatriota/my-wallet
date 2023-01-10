import styled from "styled-components";
import { getMonths } from "../data-service";
import { toMonthLabel } from "../month-service";

const formattedMonths = Object.keys(getMonths()).map(toMonthLabel);

const StyledNav = styled.nav`
  display: flex;
  margin-bottom: 20px;
  border-bottom: 2px solid #ececef;
  padding-bottom: 20px;
  padding-top: 20px;

  & button {
    background-color: transparent;
    border: none;
    font-size: 0.875rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.2s all ease-in-out;
    color: #6c6c7f;

    &:hover,
    &.current {
      font-weight: 600;
      color: #212121;
    }
  }

  & button + button {
    margin-left: 10px;
  }
`;

export function WalletHomeNav({ selected, onChange }) {
  const renderMonthButton = (month, index) => (
    <button
      onClick={() => onChange(index)}
      key={month}
      className={selected === index ? `current` : undefined}
    >
      {month}
    </button>
  );

  return (
    <section style={{ overflowX: "hidden" }}>
      <StyledNav>{formattedMonths.map(renderMonthButton)}</StyledNav>
    </section>
  );
}
