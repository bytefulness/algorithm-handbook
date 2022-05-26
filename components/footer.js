import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-12">
          <h3 className="text-2xl font-bold leading-tight text-center">
            This project developed by Erhan Akyel.
          </h3>
        </div>
      </Container>
    </footer>
  );
}
