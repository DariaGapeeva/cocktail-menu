import Select from "react-select";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Category from "./Category";
import Wrapper from "./styled/Wrapper";

const Label = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #152536;
  margin-right: 45px;
`;

const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 0px 11px 0px;
  border-bottom: 1px solid #ced4da;
  height: 112px;
`;

const SelectStyled = styled(Select)`
  position: absolute;
  z-index: 2;
`;

const groupStyles = {
  textAlign: "left",
  fontWeight: 600,
  fontSize: 12,
  lineHeight: "16px",
  color: "#ABB5BE",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  margin: "0px 0px 10px 10px",
};

const formatGroupLabel = () => (
  <div style={groupStyles}>
    <span>Select a category</span>
  </div>
);

const Main = ({ value, label }) => {
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      margin: 0,
      width: 420,
      border: "1px solid #DEE2E6",
      borderRadius: 4,
    }),

    placeholder: (provided, state) => ({
      ...provided,
      visibility: state.menuIsOpen ? "hidden" : "visible",
      fontSize: 14,
      color: color,
      fontWeight: weight,
    }),
    groupHeading: () => ({}),

    option: (provided) => ({
      ...provided,
      color: "#343A40",
      background: "#FFFFFF",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "10px",
      textAlign: "left",
      marginTop: "10px",
      cursor: "pointer",
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: state.isFocused ? "#9B51E0" : color,
    }),

    control: (provided, state) => ({
      width: 420,
      border:
        state.menuIsOpen || state.isSelected
          ? "1px solid #9B51E0"
          : `1px solid ${color}`,
      borderBottom: `1px solid ${color}`,
      color: "#6C757D",
      borderRadius: 4,
      display: "flex",
      padding: "0px 0px 0px 3px",
    }),
    indicatorSeparator: () => ({}),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";
      return { ...provided, opacity, transition };
    },
  };

  const color = value ? "#9B51E0" : "#CED4DA";
  const weight = value ? 600 : 400;

  let history = useHistory();

  const categories = useSelector((state) => state.category.categories);

  const groupedOptions = [
    {
      label: "Select a category",
      options: categories,
    },
  ];

  const onChangeHandler = (value) => {
    history.push(`/${value.value}`);
  };

  return (
    <Wrapper>
      <Navbar>
        <Label>Select a category</Label>
        <SelectStyled
          placeholder={label ? label : "Category"}
          styles={customStyles}
          options={groupedOptions}
          formatGroupLabel={formatGroupLabel}
          onChange={onChangeHandler}
        />
      </Navbar>
      {value && <Category value={value} />}
    </Wrapper>
  );
};

export default Main;
