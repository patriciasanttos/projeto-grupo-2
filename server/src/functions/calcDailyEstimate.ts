import { CompanyDimensionType } from "../utils/types";

export default function calcDailyEstimate(dimensions: CompanyDimensionType) {
    const dailySurgeries = dimensions.surgery_rooms * dimensions.surgerys_per_day;

    const dailyVolSurgeries = {
        tissue: dailySurgeries * dimensions.vol_per_surgery.tissue,
        instruments: dailySurgeries * dimensions.vol_per_surgery.instruments
    };
    const utiTotalVol = {
        tissue: dimensions.uti_beds * dimensions.vol_per_uti_beds.tissue,
        instruments: dimensions.uti_beds * dimensions.vol_per_uti_beds.instruments
    };
    const hospTotalVol = {
        tissue: dimensions.hospital_beds * dimensions.vol_per_hospital_beds.tissue,
        instruments: dimensions.hospital_beds * dimensions.vol_per_hospital_beds.instruments
    }

    const tissue = dailyVolSurgeries.tissue + utiTotalVol.tissue + hospTotalVol.tissue;
    const instruments = dailyVolSurgeries.instruments + utiTotalVol.instruments + hospTotalVol.instruments;


    return {
        ...dimensions,
        daily_vol_estimate: {
            tissue,
            instruments,
            total: (tissue + instruments),
            in_lit: (tissue + instruments) * 54
        }
    }
}