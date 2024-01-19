import { ChangeEvent, FC } from "react";
import { Input, Label, Text } from "./Filter.styled";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { selectFilter } from "@/redux/selectors";
import { changeFilter } from "@/redux/filter/slice";

const Filter: FC = () => {
  const filter = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    dispatch(changeFilter(value))
  }

  return (
    <div>
        <Label htmlFor="filter"><Text></Text></Label>
        <Input
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
        placeholder="Find contacts by name"
        />
    </div>
  );
}

export default Filter;