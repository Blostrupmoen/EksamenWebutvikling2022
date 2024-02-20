// Definerer en type for valg av aktivitetstype
export interface ActivityOption {
    label: string;
    value: string;
  }
  
  // Dette er dine aktivitetstyper som brukeren kan velge mellom
  export const activityOptions: ActivityOption[] = [
    { label: "Running", value: "running" },
    { label: "Cycling", value: "cycling" },
    { label: "Swimming", value: "swimming" },
    { label: "Weightlifting", value: "weightlifting" },
    { label: "Yoga", value: "yoga" },
    { label: "Pilates", value: "pilates" },
    { label: "Boxing", value: "boxing" },
    { label: "Martial Arts", value: "martial_arts" },
    { label: "Walking", value: "walking" },
    { label: "Hiking", value: "hiking" },
    { label: "Dancing", value: "dancing" },
    { label: "Rock Climbing", value: "rock_climbing" },
    { label: "Rowing", value: "rowing" },
    { label: "Canoeing", value: "canoeing" },
    { label: "Skiing", value: "skiing" },
    { label: "Snowboarding", value: "snowboarding" },
    { label: "Skateboarding", value: "skateboarding" },
    { label: "Surfing", value: "surfing" },
    { label: "Golf", value: "golf" },
    { label: "Tennis", value: "tennis" },
    { label: "Badminton", value: "badminton" },
    { label: "Squash", value: "squash" },
    { label: "Basketball", value: "basketball" },
    { label: "Football", value: "football" },
    { label: "Rugby", value: "rugby" },
    { label: "Volleyball", value: "volleyball" },
    { label: "Table Tennis", value: "table_tennis" },
    { label: "Cricket", value: "cricket" },
    { label: "Gymnastics", value: "gymnastics" },
    { label: "Horse Riding", value: "horse_riding" },
    { label: "Fencing", value: "fencing" },
  ];
  
  // Oppdaterer ActivityType til kun å omhandle data for en aktivitet
  export interface ActivityType {
    id: any;
    selectedActivity: string; // Nøkkelen til den valgte aktivitetstypen, f.eks. "running"
    duration: number;
    calories: number;
    timestamp: string;
    nickname?: string;
    userInput?: string;
    image?: string;
  }


