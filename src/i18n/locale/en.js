import elMsg from 'element-ui/lib/locale/lang/en';

export const name = 'English';

export const locale = {
  ...elMsg,
  login: {
    username: 'Username',
    error_username: 'Username is required',
    password: 'Password',
    error_password: 'Password is required',
    button: 'Login',
    failed: 'Failed: Invalid Username or Password'
  },
  header: {
    title: 'Superdock Drone Automatic Airport',
    notify: 'Notification History',
    notify_clear: 'Clear',
    notify_empty: 'No history notification',
    status: 'Communication Status',
    logout: 'Logout',
    air: 'Drone',
    depot: 'Depot',
    normal: 'Normal',
    shutdown: 'Powered Off',
    net_error: 'Network Error',
    never_online: 'Not Connected',
    abnormal: 'Abnormal'
  },
  sidemenu: {
    overview: 'Overview',
    plan: 'Plans',
    depot: 'Depots',
    air: 'Drone'
  },
  plan: {
    view: {
      title: 'View Plan',
      run: 'Run Plan',
      stop: 'Terminate Plan',
      history: 'Plan axecution history',
      run_time: 'Execution time',
      raw_data: 'Raw data',
      auto_run: 'Automatic processing',
      logs: 'Fly logs',
      sever_logs: 'Sever logs',
      pending: 'Sending plan ...',
      start_run: 'Plan started',
      start_fail: 'Failed to start plan: {code}',
      stop_run: 'Plan terminated',
      stop_fail: 'Failed to terminate plan: {code}'
    },
    edit: {
      add: 'Create',
      alter: 'Modify',
      create: 'Create',
      save_plan: 'Save',
      delete_plan: 'Delete',
      name_inp: 'Enter the name of plan',
      desc_inp: 'Enter the description of plan',
      first_time_inp: 'Select the first run time',
      depot_inp: 'Select to take off and land',
      air_inp: 'Select the drone',
      cycle_inp: 'Select the run cycle',
      cycle_type_1: 'Manual',
      cycle_type_2: 'Once',
      cycle_type_3: 'EveryHour',
      cycle_type_4: 'EveryDay',
      cycle_type_5: 'EveryWeek',
      cycle_type_6: 'EveryMonth',
      select_map: 'Select map',
      please_name: 'Please enter the name of plan!',
      please_desc: 'Please enter the description of plan!',
      please_air: 'Please select the drone!',
      please_depot: 'Please select to take off and land!',
      please_cycle: 'Please select the run cycle!',
      please_file: 'Please upload the waypoint file!',
      delete_tips: 'This action will delete the plan, will it continue?'
    },
    plan_name: 'Name',
    plan_desc: 'Description',
    plan_desc_no: 'No description',
    plan_air: 'Flying drone',
    plan_depot: 'Depot',
    plan_cycle: 'Cycle',
    plan_mapfile: 'Waypoint file',
    plan_first_time: 'First run time',
    weather: 'Weather',
    fly_check: 'Pre-flight inspection',
    plan_createtime: 'Creation time',
    fly_check_desc: 'We need to check the condition of the equipment to ensure that the plan can be performed safely.',
    start_now: 'Start Now'
  },
  air: {
    status_standby: 'Standby',
    status_flying: 'Flying',
    status_error: 'Error',
    status_: '--',
    mode_auto: 'Automatic',
    mode_guide: 'Boot',
    mode_fixed: 'Fixed Point',
    mode_back: 'Return',
    mode_land: 'Landing',
    mode_: '--Mode',
    flight_time: 'Flying for {t}',
    flight_speed: 'Speed {s}',
    flight_height: 'Height {h}',
    battery_remain: 'Battery {num}',
    battery_voltage: 'Voltage {num}',
    gps_satellites: '{num} Satellite(s)',
    pitch_angle: 'PTZ angle',
    gimbal_mode_mavlink: 'Manual',
    gimbal_mode_neutral: 'Auto',
    gimbal_mode_rc: 'Remote-Control',
    screenshot: 'Screenshot',
    recording: 'Recording',
    air_control: 'Drone control',
    air_hover: 'Hover',
    air_return: 'Return',
    air_takeoff: 'Take off',
    air_runplan: 'Start task',
    air_up: 'Rise {num} m',
    air_down: 'Decrease {num} m',
    air_landpoint: 'Landing',
    air_land: 'Landing directly',
    air_emergency_stop: 'Emergency stop',
    air_emergency_stop_tips: 'Paddle blade stop, to be very careful',
  },
  depot: {
    monitor: 'Realtime monitor',
    weather: 'Outdoor weather',
    weather_feel: 'Weather',
    weather_caption: 'Radar precipitation intensity',
    wind_speed: 'Wind Speed',
    wind_direction: 'Wind Direction',
    humidity: 'Hum',
    temperature: 'Tem',
    charts: '<{a} light rain, {a}-{b} moderate rain, >{b} heavy rain',
    depot_info: 'Information',
    depot_id: 'Id',
    view_old_monitor: 'Historical monitor',
    view_fly_plan: 'Fly plan',
    battery: '{i} Battery',
    cycle: 'Cycles',
    maintain: 'Maintain',
    debug: 'Debug',
    putin: 'Put in',
    pickout: 'Remove',
    start_charge: 'S-charge',
    stop_charge: 'E-charge',
    motor_run: 'Motor movement',
    emergency_stop: 'Stop',
    open_door: 'Open door',
    close_door: 'Close door',
    air_fixed: 'Fixed Drone',
    air_release: 'Release Drone',
    air_bat_putin: 'Install-Bat',
    air_bat_pickout: 'Remove-Bat',
    air_reset: 'Reset',
    platform_rise: 'Platform Rise',
    platform_bottom: 'Platform Bottom',
    platform_level: 'Platform Leveling',
    status_normal: 'Normal',
    status_abnormal: 'AbNormal'
  },
  common: {
    air: 'Drone',
    depot: 'Depot',
    cancel: 'Cancel',
    comfirm: 'Confirm',
    view: 'View',
    download: 'Download',
    upload: 'Upload',
    re_upload: 'Re-upload',
    retry: 'Retry',
    connecting: 'Connecting...',
    back: 'Cancel & back',
    data_none: 'No relevant data yet',
    debug_tips: 'The commands are for developers only',
    send: 'Send',
    clear: 'Clear',
    control: 'Control',
    advanced_control: 'Advance Control',
    debug: 'Debug',
    status: 'Status',
    air_status: 'UAV',
    depot_status: 'Depot',
    not_operational: 'Abnormal communication status, unable to opreate.',
    none: 'None',
    logs: 'Logs',
    no_video: 'No video source',
    system_tips: 'System',
    operate_pending: 'Pending...',
    operate_success: 'Success',
    operate_error: 'Failed',
    plan_ready: 'The plan is ready, is it run immediately?',
    battery: {
      title: 'Smart Battery',
      id: 'Serial',
      temp: 'Temperature',
      cap: 'Capacity',
      cur: 'Current',
      remain: 'Remaining',
      cycle: 'Cycle Count',
      vol_cell: 'Voltage',
      vol: 'Total Voltage',
      status: 'Status',
      bal: 'Balance'
    }
  },
  weather: {
    clear_day: 'Sunny',
    clear_night: 'Sunny',
    partly_cloudy: 'Partly cloudy',
    cloudy: 'Cloudy',
    rain: 'Rain',
    snow: 'Snow',
    wind: 'Wind',
    haze: 'Haze'
  },
  preflight: {
    title: 'Preflight Check',
    realtime: 'Realtime Weather',
    wind: 'Wind speed',
    rain: 'Rainfall',
    forecast: 'Weather Forecast',
    intensity: 'Radar precipitation intensity',
    distance: 'Nearest precipitation zone',
    comfirm: 'Confirm Run'
  }
};
