import {Input} from './ShadCn/input';

function CustomInput({className}: {className?: string}) {
  return <Input className={`max-w-100 text-primary bg-second-Normal rounded-3xl border-0 focus:border-primary ${className}`} />;
}

export default CustomInput;
