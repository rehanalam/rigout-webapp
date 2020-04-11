import * as React from "react";
import { CityListByServiceType } from 'bookingConstant';
import Select from 'react-select';

interface CitiesListProps {
    cityListByServiceType: CityListByServiceType[];
    selectedCity?: number;
}

interface CitiesListState {
    selectedCity: number;
}

// interface CitiesOption {
//     label: string;
//     value: string;
// }

export class CitiesList extends React.Component<CitiesListProps, CitiesListState> {

    constructor(props: CitiesListProps) {
        super(props);
        this.state = {
            // cityListByServiceType: {
            //     CityID: 0,
            //     CityName: '',
            //     CityShortDesc: '',
            //     StationID: 0,
            //     StationDesc: '',
            //     StationShortDesc: '',
            //     BranchID: 0,
            //     BranchName: '',
            //     HubID: 0,
            //     HubDesc: '',
            //     ZoneID: 0,
            //     ZoneDesc: '',
            //     RegionID: 0,
            //     RegionDesc: '',
            //     ProvinceID: 0,
            //     ProvinceName: '',
            //     ServiceAreaTypeID: '',
            //     ServiceAreaTypeDesc: '',
            //     EmployeeID: '',
            //     EmployeeName: ''
            // },
            selectedCity: this.props.selectedCity || 0
        }


    }
    getCitiesOptionList = () => {
        var cityOptionList = [{}];
        this.props.cityListByServiceType.forEach((o, i) => {
            cityOptionList.push({ label: o.CityName, value: o.CityID });
        });
        return cityOptionList;
    }

    handleChange = selectedOption => {
        this.setState(
            { selectedCity: selectedOption },
            () => console.log(`Option selected:`, this.state.selectedCity)
        );
    };
    render() {
        const { selectedCity } = this.state;
        let citiesOptionList = this.getCitiesOptionList();
       
        return (
            <div>
                {this.state && <Select
                    value={selectedCity}
                    onChange={this.handleChange}
                    options={citiesOptionList}
                />}
            </div>
        );
    }
}