class InspectionFactory
  TEMPLATE = [
    {
      name: 'Condition/Appearance (Debris/Marks)',
      sequence: 1,
      items: [
        {name: 'Exterior', sequence: 1, type: 'BasicItem'},
        {name: 'Interior',  sequence: 2, type: 'BasicItem'},
        {name: 'Windsheild/Glass',  sequence: 3, type: 'BasicItem'},
        {name: 'Headlamp Lens Condition',  sequence: 4, type: 'BasicItem'},
        {name: 'Other',  sequence: 5, type: 'BasicItem'}
      ]
    },
    {
      name: 'Road Test',
      sequence: 2,
      items: [
        {name: 'Wiper Blades', sequence: 1, type: 'BasicItem'},
        {name: 'Washer Fluid Level',  sequence: 2, type: 'BasicItem'},
        {name: 'Horn',  sequence: 3, type: 'BasicItem'},
        {name: 'Parking Brake',  sequence: 4, type: 'BasicItem'},
        {name: 'Brakes (Pulsation)',  sequence: 5, type: 'BasicItem'},
        {name: 'Clutch/Trans Operation',  sequence: 6, type: 'BasicItem'},
        {name: 'Instruments/Dashboard',  sequence: 7, type: 'BasicItem'},
        {name: 'Engine Performance',  sequence: 8, type: 'BasicItem'},
        {name: 'Drift/Pull/Vibration',  sequence: 9, type: 'BasicItem'},
        {name: 'Cruise Control',  sequence: 10, type: 'BasicItem'},
        {name: 'Heater',  sequence: 11, type: 'BasicItem'},
        {name: 'Air Conditioning',  sequence: 12, type: 'BasicItem'},
        {name: 'Check Engine Light',  sequence: 13, type: 'BasicItem'},
        {name: 'Any Noise/Vibration',  sequence: 14, type: 'BasicItem'},
        {name: 'Current Lube Sticker',  sequence: 15, type: 'BasicItem'}
      ]
    },
    {
      name: 'Lights',
      sequence: 3,
      items: [
        {name: 'Turn Signals', sequence: 1, type: 'BasicItem'},
        {name: 'Hazards',  sequence: 2, type: 'BasicItem'},
        {name: 'Brake Lights',  sequence: 3, type: 'BasicItem'},
        {name: 'Reverse Lights',  sequence: 4, type: 'BasicItem'},
        {name: 'Marker Lights',  sequence: 5, type: 'BasicItem'},
        {name: 'Parking/Tail Lights',  sequence: 6, type: 'BasicItem'},
        {name: 'License Plate Lights',  sequence: 7, type: 'BasicItem'},
        {name: 'Dash Lights',  sequence: 8, type: 'BasicItem'},
        {name: 'Fog Lights',  sequence: 9, type: 'BasicItem'},
      ]
    },
    {
      name: 'Under Hood - Fluids',
      sequence: 4,
      items: [
        {name: 'Transmission Fluid', sequence: 1, type: 'BasicItem'},
        {name: 'Washer Fluid',  sequence: 2, type: 'BasicItem'},
        {name: 'Coolant',  sequence: 3, type: 'BasicItem'},
        {name: 'Power Steering Fluid',  sequence: 4, type: 'BasicItem'},
        {name: 'Brake Fluid',  sequence: 5, type: 'BasicItem'},
        {name: 'Clutch',  sequence: 6, type: 'BasicItem'},
        {name: 'Oil',  sequence: 7, type: 'BasicItem'},
      ]
    },
    {
      name: 'Under Hood - General',
      sequence: 5,
      items: [
        {name: 'Belt Condition', sequence: 1, type: 'BasicItem'},
        {name: 'Battery Test',  sequence: 2, type: 'BasicItem'},
      ]
    },
    {
      name: 'Under Hood - Cooling System',
      sequence: 6,
      items: [
        {name: 'Radiator Hoses', sequence: 1, type: 'BasicItem'},
        {name: 'Heater Hoses',  sequence: 2, type: 'BasicItem'},
        {name: 'Radiator', sequence: 3, type: 'BasicItem'},
        {name: 'Radiator Cap',  sequence: 4, type: 'BasicItem'},
      ]
    },
    {
      name: 'Under Car - Engine',
      sequence: 7,
      items: [
        {name: 'Engine Mounts', sequence: 1, type: 'BasicItem'},
        {name: 'Oil/Trans Leaks',  sequence: 2, type: 'BasicItem'},
        {name: 'Transmission Mounts',  sequence: 3, type: 'BasicItem'}
      ]
    },
    {
      name: 'Under Car - CV Joints',
      sequence: 8,
      items: [
        {name: 'Left Drive Shaft', sequence: 1, type: 'BasicItem'},
        {name: 'Right Drive Shaft',  sequence: 2, type: 'BasicItem'}
      ]
    },
    {
      name: 'Under Car - Drivetrain',
      sequence: 9,
      items: [
        {name: 'Clutch', sequence: 1, type: 'BasicItem'},
        {name: 'Slave Cylinder',  sequence: 2, type: 'BasicItem'},
        {name: 'Master Cylinder',  sequence: 3, type: 'BasicItem'},
        {name: 'U-Joints',  sequence: 4, type: 'BasicItem'},
        {name: 'Differential Fluids',  sequence: 5, type: 'BasicItem'},
        {name: 'Transfer Case',  sequence: 6, type: 'BasicItem'},
      ]
    },
    {
      name: 'Steering & Suspension',
      sequence: 10,
      items: [
        {name: 'Steering Gear', sequence: 1, type: 'BasicItem'},
        {name: 'Alignment',  sequence: 2, type: 'BasicItem'},
        {name: 'Tie Rod Ends',  sequence: 3, type: 'BasicItem'},
        {name: 'Ball Joints',  sequence: 4, type: 'BasicItem'},
        {name: 'Drag Links',  sequence: 5, type: 'BasicItem'},
        {name: 'Idler Arm',  sequence: 6, type: 'BasicItem'},
        {name: 'Control Arm',  sequence: 7, type: 'BasicItem'},
        {name: 'Front Shocks/Struts',  sequence: 8, type: 'BasicItem'},
        {name: 'Rear Shocks/Struts',  sequence: 9, type: 'BasicItem'},
        {name: 'Springs',  sequence: 10, type: 'BasicItem'},
        {name: 'Other',  sequence: 11, type: 'BasicItem'},
      ]
    },
    {
      name: 'Exhaust',
      sequence: 11,
      items: [
        {name: 'Manifold', sequence: 1, type: 'BasicItem'},
        {name: 'Front Pipe',  sequence: 2, type: 'BasicItem'},
        {name: 'Cat Converter',  sequence: 3, type: 'BasicItem'},
        {name: 'Intermediate Pipe',  sequence: 4, type: 'BasicItem'},
        {name: 'Muffler',  sequence: 5, type: 'BasicItem'},
        {name: 'Tail Pipe',  sequence: 6, type: 'BasicItem'},
        {name: 'Accessories',  sequence: 7, type: 'BasicItem'},
      ]
    },
    {
      name: 'Brakes',
      sequence: 12,
      items: [
        {name: 'Wheel Bearings', sequence: 1, type: 'BasicItem'},
        {name: 'Brake Hoses',  sequence: 2, type: 'BasicItem'},
        {name: 'Caliper/Wheel Cylinder',  sequence: 3, type: 'BasicItem'},
        {name: 'Rotors L/R',  sequence: 4, type: 'BrakeHardItem'},
        {name: 'Drums L/R',  sequence: 5, type: 'BrakeHardItem'},
        {name: 'Left Front Pads',  sequence: 6, type: 'BrakeSoftItem'},
        {name: 'Right Front Pads',  sequence: 7, type: 'BrakeSoftItem'},
        {name: 'Left Rear Pads',  sequence: 8, type: 'BrakeSoftItem'},
        {name: 'Right Rear Pads',  sequence: 9, type: 'BrakeSoftItem'},
      ]
    },
    {
      name: 'Tires',
      sequence: 13,
      items: [
        {name: 'Left Front Tread', sequence: 1, type: 'TireTreadItem'},
        {name: 'Right Front Tread',  sequence: 2, type: 'TireTreadItem'},
        {name: 'Left Rear Tread',  sequence: 3, type: 'TireTreadItem'},
        {name: 'Right Rear Tread',  sequence: 4, type: 'TireTreadItem'},
        {name: 'Spare Tread',  sequence: 6, type: 'TireTreadItem'},
        {name: 'Left Front Pressure',  sequence: 6, type: 'TirePressureItem'},
        {name: 'Right Front Pressure',  sequence: 7, type: 'TirePressureItem'},
        {name: 'Left Rear Pressure',  sequence: 8, type: 'TirePressureItem'},
        {name: 'Right Rear Pressure',  sequence: 9, type: 'TirePressureItem'},
        {name: 'Spare Pressure',  sequence: 10, type: 'TirePressureItem'},
        {name: 'All Hub Caps',  sequence: 11, type: 'BasicItem'},
        {name: 'All Lug Nuts',  sequence: 12, type: 'BasicItem'},
        {name: 'Wheel Locks',  sequence: 13, type: 'BasicItem'},
      ]
    },
    {
      name: 'Under Hood - Tune Up',
      sequence: 14,
      items: [
        {name: 'Ignition Wires/Coils', sequence: 1, type: 'BasicItem'},
        {name: 'Spark Plugs',  sequence: 2, type: 'BasicItem'},
        {name: 'Distributor Cap/Rotor',  sequence: 3, type: 'BasicItem'},
        {name: 'Throttle Body',  sequence: 4, type: 'BasicItem'},
        {name: 'Air Filter',  sequence: 5, type: 'BasicItem'},
        {name: 'Fuel Filter',  sequence: 6, type: 'BasicItem'},
        {name: 'Cabin Air Filter',  sequence: 7, type: 'BasicItem'},
      ]
    },
    {
      name: 'Accessories',
      sequence: 15,
      items: [
        {name: 'Window Operation', sequence: 1, type: 'BasicItem'},
        {name: 'Power Point',  sequence: 2, type: 'BasicItem'},
        {name: 'Radio',  sequence: 3, type: 'BasicItem'},
        {name: 'Antenna',  sequence: 4, type: 'BasicItem'},
        {name: 'Sunroof',  sequence: 5, type: 'BasicItem'},
        {name: 'Check Engine Lights',  sequence: 6, type: 'BasicItem'},
        {name: 'Key Fob',  sequence: 7, type: 'BasicItem'},
      ]
    }
  ]

  def self.build(attributes = {})
    inspection = Inspection.new(attributes)

    TEMPLATE.each do |area_template|
      area = inspection.areas.build(
        name: area_template[:name],
        sequence: area_template[:sequence]
      )

      area_template[:items].each do |item_template|
        area.items.build(
          name: item_template[:name],
          sequence: item_template[:sequence],
          type: item_template[:type]
        )
      end

    end

    inspection
  end
end
