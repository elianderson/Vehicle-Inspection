interface IProps {
  inspections?: Inspection[]
};

interface IState {
  data?: any
};

interface Inspection {
  date_performed?: Date,
  vin?: string,
  technician_id?: number,
  condition?: number,
  tire_size?: string,
  notes?: string
  created_at?: Date,
  updated_at?: Date,
  areas?: any[]
}
