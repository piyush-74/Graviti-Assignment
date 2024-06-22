import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const SelectTravelMode = ({ travelMode, setTravelMode, setBlur }) => {
    return (
        <Select value={travelMode} onValueChange={(value) => {
                setTravelMode(value)
                setBlur(true)
            }
        }>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Travel Mode" />
            </SelectTrigger>
            <SelectContent>
                {/* <SelectItem value="BICYCLING">Bicycling</SelectItem> */}
                <SelectItem value="DRIVING">Driving</SelectItem>
                {/* <SelectItem value="TRANSIT">Transit</SelectItem> */}
                <SelectItem value="WALKING">Walking</SelectItem>
            </SelectContent>
        </Select>
    );
};

export default SelectTravelMode;
