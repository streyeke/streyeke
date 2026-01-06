import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  scrollToSection: (id: string) => void;
}

export default function MobileMenu({ isOpen, onClose, scrollToSection }: MobileMenuProps) {
  const handleNavClick = (id: string) => {
    scrollToSection(id);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl">
        <div className="p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>

          <div className="mt-12 space-y-6">
            {['home', 'product', 'about'].map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className="block w-full text-left text-xl font-medium text-gray-700 hover:text-blue-600 transition-colors capitalize"
              >
                {section}
              </button>
            ))}

            <button className="w-full mt-8 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
