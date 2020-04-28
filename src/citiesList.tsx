import * as React from "react";
import { TcsCity, CallCourierCity } from 'bookingConstant';
import Select from 'react-select';

interface CitiesListProps {
    cityList: TcsCity[] | CallCourierCity[];
    selectedCity?: CityOption;
    onChange: (e) => void;
    courierService: string;
}

interface CitiesListState {
    // selectedCity: CityOption;
}

export interface CityOption {
    label: string | undefined;
    value: number | undefined;
}

export class CitiesList extends React.Component<CitiesListProps, CitiesListState> {

    constructor(props: CitiesListProps) {
        super(props);
    }

    getCitiesOptionList = () => {
        var cityOptionList = [{}];
        this.props.cityList.forEach((o, i) => {
            if (this.props.courierService === 'tcs') {
                cityOptionList.push({ label: o.cityName, value: o.cityID });
            } else {
                cityOptionList.push({ label: o.CityName, value: o.CityID });
            }
        });
        return cityOptionList;
    }

    handleChange = selectedOption => {
        this.props.onChange(selectedOption);
    };
    render() {
        let citiesOptionList = this.getCitiesOptionList();

        return (
            <div>
                <Select
                    onChange={this.handleChange}
                    options={citiesOptionList}
                    defaultValue={this.props.selectedCity}
                />
            </div>
        );
    }
}