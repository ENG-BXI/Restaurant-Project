import {Button} from './ShadCn/button';

function CustomButton({text, isActive}: {text: string; isActive?: boolean}) {
  return (
    <Button variant={isActive ? 'outline' : 'default'} className={`cursor-pointer rounded-3xl px-5 bg-second-Normal text-primary hover:bg-second-Normal-hover ${isActive && 'bg-transparent text-second-Normal border-second-Normal'}`}>
      {text}
    </Button>
  );
}

export default CustomButton;
